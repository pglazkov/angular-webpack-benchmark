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

const stats = true;

module.exports = function (args = {}) {  
  const isDev = !args.PROD;
  const isAot = !!args.AOT;
  const distPath =  'dist';
  const aotOutputPath = 'aot_temp';
  const tsConfigName = isDev ? 'tsconfig.json' : 'tsconfig.prod.json';  
  const cpuCount = os.cpus().length;
  const happyPackMode = !!args.HAPPYPACK;

  const tsLoaders =(() => {
    let loaders = [];

    if (!isDev) {
      loaders.push(
        {
          loader: '@angular-devkit/build-optimizer/webpack-loader',
          options: {
            sourceMap: false
          }
        }
      );
    }

    loaders = loaders.concat([      
      {
        loader: 'angular-router-loader',
        options: {
          debug: true,
          loader: 'system'
        }
      },
      { 
        loader: 'ts-loader', 
        options: { 
          configFile: tsConfigName,
          happyPackMode: happyPackMode
        } 
      },
      {
        loader: 'angular2-template-loader'
      } 
    ]);

    return loaders;
  })(); 

  return {
    target: 'web',
    stats: true,
    bail: true,
    devtool: isDev ? 'cheap-module-source-map' : undefined,
    entry: {
      'polyfills': './src/polyfills.ts',
      'app': './src/' + (isAot ? 'main.aot.ts' : 'main.ts')
    },

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
          use: happyPackMode 
            ? 'happypack/loader?id=ts' 
            : tsLoaders
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
          chunks: ['app'],
          minChunks: module => /node_modules/.test(module.resource)
        }),
    
        new HtmlWebpackPlugin({
          template: root('src', 'index.ejs'),
          title: 'Angular Webpack Benchmark',
          filename: 'index.html',
          chunksSortMode: 'manual',
          chunks: ['polyfills', 'vendor', 'app'],
          inject: 'body',
          metadata: {
            isDevServer: process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]))            
          }
        })
      ];

      if (happyPackMode) {
        plugins = plugins.concat([
          new HappyPack({
            id: 'ts',
            threads: Math.min(
              cpuCount > 1 ? (cpuCount - 1 /* at least 1 cpu for the fork-ts-checker-webpack-plugin */) : 1, 
              8 /* More than 8 threads probably will not improve the build speed */
            ),
            loaders: tsLoaders.map(l => { 
              return { 
                path: l.loader, 
                query: l.options 
              };
            })
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
        index: `/${distPath}/`
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

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}