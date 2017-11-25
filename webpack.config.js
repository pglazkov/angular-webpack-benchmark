// see https://github.com/webpack/loader-utils/issues/56
process.noDeprecation = true;

const os = require('os');
const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const apps = [
  {
    name: 'airplane',
    baseUrl: '/airplane'
  },
  {
    name: 'biofuels',
    baseUrl: '/biofuels'
  }
];

const stats = true;

module.exports = function (args = {}) {  
  const isDev = !args.PROD;
  const isAot = !!args.AOT;
  const distPath =  'dist';
  const aotOutputPath = 'aot_temp';
  const tsConfigName = isDev ? 'tsconfig.json' : 'tsconfig.prod.json';  
  const cpuCount = os.cpus().length;
  const happypackMode = !!args.HAPPYPACK;

  return {
    target: 'web',
    stats: true,
    bail: true,
    devtool: isDev ? 'cheap-module-source-map' : undefined,
    entry: (() => {
      let entry = {
        'polyfills': './src/polyfills.ts'
      };

      apps.forEach(function (app) {
        entry[getAppBundleName(app)] = './src/apps/' + app.name + (isAot ? '/main.aot.ts' : '/main.ts');
      });

      return entry;
    })(),

    output: {
      path: root(distPath),
      filename: '[name].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: `/${distPath}/`
    },

    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [root('src'), root('node_modules')]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          use: happypackMode 
            ? 'happypack/loader?id=ts' 
            : { 
                loader: 'ts-loader', 
                options: { 
                  configFile: tsConfigName 
                } 
              }
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader']          
        },
        {
          test: /\.scss$/,
          use: ['to-string-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        }  
      ]
    },

    plugins: (() => {
      let plugins = [
        new CleanWebpackPlugin([root(distPath)], {
          verbose: false
        }),
    
        new ProgressPlugin(),
    
        // See: https://github.com/angular/angular/issues/11580
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, root('src'), {}),
    
        new CommonsChunkPlugin({
          name: 'polyfills',
          chunks: ['polyfills']
        }),
        new CommonsChunkPlugin({
          name: 'vendor',
          chunks: apps.map(getAppBundleName),
          minChunks: module => /node_modules/.test(module.resource)
        }),
    
        new HtmlWebpackPlugin({
          template: root('src', 'index.ejs'),
          filename: 'index.html',
          inject: false,
          metadata: {
            apps: apps
          }
        })
      ];

      if (happypackMode) {
        plugins = plugins.concat([
          new HappyPack({
            id: 'ts',
            threads: Math.min(
              cpuCount > 1 ? (cpuCount - 1 /* at least 1 cpu for the fork-ts-checker-webpack-plugin */) : 1, 
              8 /* More than 8 threads probably will not improve the build speed */
            ),
            loaders: [
              {
                path: 'ts-loader',
                query: {
                  configFile: tsConfigName,
                  happyPackMode: true
                }
              }
            ]
          }),
      
          new ForkTsCheckerWebpackPlugin({
            // This will ensure that the plugin checks for both syntactic errors (eg const array = [{} {}];) 
            // and semantic errors (eg const x: number = '1';). By default the plugin only checks for semantic 
            // errors (as when used with ts-loader in transpileOnly mode, ts-loader will still report syntactic errors).
            checkSyntacticErrors: true,
            watch: ['./src']
          })
        ]);
      }

      apps.forEach((app) => {
        var otherApps = apps.slice();
    
        var appItemIndex = otherApps.indexOf(app);
    
        if (appItemIndex > -1) {
          otherApps.splice(appItemIndex, 1);
        }
    
        plugins.push(new HtmlWebpackPlugin({
          template: root('src', 'app-index.ejs'),
          title: app.name,
          filename: getAppHtmlFileName(app),
          excludeChunks: otherApps.map(getAppBundleName),
          chunksSortMode: 'manual',
          chunks: ['polyfills', 'vendor', getAppBundleName(app)],
          inject: 'body',
          metadata: {
            isDevServer: process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1])),
            baseUrl: app.baseUrl
          }
        }));
      });

      if (!isDev) {
        plugins = plugins.concat([
          new OptimizeJsPlugin({
            sourceMap: false
          }),      
    
          new UglifyJsPlugin({
            beautify: false,
            output: {
              comments: false
            },
            mangle: {
              screw_ie8: true
            },
            compress: {
              screw_ie8: true,
              warnings: false,
              conditionals: true,
              unused: true,
              comparisons: true,
              sequences: true,
              dead_code: true,
              evaluate: true,
              if_return: true,
              join_vars: true,
              negate_iife: false
            },
          })
        ]);
      }

      return plugins;
    })(),

    devServer: {
      port: 5000,
      stats: true,
      historyApiFallback: {
        index: `/${distPath}/`,
        rewrites: apps.map(function (app) {
          return {
            from: new RegExp('^' + app.baseUrl + '(\/.*|$)'),
            to: `/${distPath}/` + getAppHtmlFileName(app)
          }
        })
      }
    },

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },

    performance: {
      hints: false
    }
  };
}

function getAppBundleName(app) {
  return app.name;
}

function getAppHtmlFileName(app) {
  return app.name + '_index.html';
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}