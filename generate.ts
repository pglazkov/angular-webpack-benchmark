// Based on https://github.com/alexeagle/angular-bazel-example/tree/demo

import * as fs from 'fs';
import * as path from 'path';
import * as mkdir from 'mkdirp';
import * as rm from 'rmfr';

const utf8 = {encoding: 'utf8'};

function doGenerate(rootDir: string, appDirName: string) {
  // Number of teams working in each app
  const teamNum = 10;
  // Number of modules in each team's part of the app
  const modNum = 10;
  // Number of components in each module
  const cmpNum = 10;
  let currentComponent = 0;

  const appDeps = [];
  const appModuleImports = [];
  const appModuleNames = [];
  const teamSelectors = [];

  for (let teamCnt = 0; teamCnt < teamNum; teamCnt++) {
    const teamName = `team${teamCnt}`;
    let appImports = '';
    const teamDeps = [];
    const teamModuleImports = [];
    const teamModuleNames = [];
    const moduleSelectors = [];

    for (let modCnt = 0; modCnt < modNum; modCnt++) {
      const modName = `mod${modCnt}`;
      const moduleImports = [];
      const moduleNames = [];
      const componentSelectors = [];

      for (let cmpCnt = 0; cmpCnt < cmpNum; cmpCnt++) {
        const cmpName = `cmp${cmpCnt}`;
        const componentClassName = `Cmp${currentComponent}Component`;
        moduleImports.push(`import {${componentClassName}} from './${cmpName}/cmp';`);
        moduleNames.push(componentClassName);
        componentSelectors.push(`cmp-${currentComponent}`);
        const tsContent = `
import {Component} from '@angular/core';
@Component({
selector: 'cmp-${currentComponent}',
template: '<strong>${currentComponent}</strong>&nbsp;',
})
export class ${componentClassName} {
add${currentComponent}(x: number) {
  return x + ${currentComponent};
}
}`;
        // Each component goes in a directory by itself, matching ng-cli
        const dir = path.join(rootDir, appDirName, teamName, modName, cmpName);
        mkdir.sync(dir);
        fs.writeFileSync(`${dir}/cmp.ts`, tsContent, utf8);          
        currentComponent++;
      } // for each component

      const moduleClassName = `Module_${teamName}_${modName}`;
      teamModuleImports.push(`import {${moduleClassName}} from './${modName}/module';`);
      teamModuleNames.push(moduleClassName);
      moduleSelectors.push(`${teamName}-${modName}`);
      const moduleContent = `
import {Component, NgModule} from '@angular/core';
${moduleImports.join('\n')}
@Component({
selector: '${teamName}-${modName}',
template: '<div>${teamName}: ${componentSelectors.map(s => `<${s}></${s}>`).join('')}</div>',
})
export class Comp {}

@NgModule({
declarations: [Comp, ${moduleNames.join(',')}],
exports: [Comp],
})
export class ${moduleClassName} {}

      `;
      const dir = path.join(rootDir, appDirName, teamName, modName);
      teamDeps.push(`//${dir}:${modName}`);        
      fs.writeFileSync(`${dir}/module.ts`, moduleContent, utf8);

    } // for each module
    teamSelectors.push(`${teamName}-nav`);
    const teamModuleClassName = `Module_${teamName}`;
    fs.writeFileSync(path.join(rootDir, appDirName, teamName, "module.ts"), `
import {Component, NgModule} from '@angular/core';
${teamModuleImports.join('\n')}

@Component({
selector: '${teamName}-nav',
template: \`${moduleSelectors.map(s => `<${s}></${s}>`).join('\n')}\`,
})
export class Comp {}

@NgModule({
declarations: [Comp],
imports: [${teamModuleNames.join(',')}],
exports: [Comp],
})
export class ${teamModuleClassName}
{}
`, utf8);


    appModuleNames.push(teamModuleClassName);
    appModuleImports.push(`import {${teamModuleClassName}} from './${teamName}/module';`);
    appDeps.push(`//${teamName}`);
  } // for each team

  const appContent = `
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
${appModuleImports.join('\n')}

@Component({
selector: 'app',
template: \`<h1>Homepage</h1>
${teamSelectors.map(s => `<${s}></${s}>`).join("\n")}
\`,
})
export class AppComponent {}

@NgModule({
declarations: [AppComponent],
bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    ${appModuleNames.join(',\n      ')}
  ],
})
export class AppModule {}
`;
  const mainContent = `
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
`;

  const mainAotContent = `
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot_temp/src/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  `;
  
  fs.writeFileSync(path.join(rootDir, appDirName, "app.module.ts"), appContent, utf8);
  fs.writeFileSync(path.join(rootDir, "main.ts"), mainContent, utf8);    
  fs.writeFileSync(path.join(rootDir, "main.aot.ts"), mainAotContent, utf8);    
}

function main(argv: string[]): Promise<number> {
  const rootPath = "./src";
  const appFolderName = "app";

  return rm(path.join(rootPath, appFolderName)).then(() => {
    return rm(path.join(rootPath, "main.ts"));
  }).then(() => {
    return rm(path.join(rootPath, "main.aot.ts"));
  }).then(() => {
    doGenerate(rootPath, appFolderName);
    return 0;
  }, e => {
    console.log(e);

    return -1;
  });
}

if (require.main === module) {
  main(process.argv.slice(2)).then(code => {
    process.exitCode = code;
  }); 
}
