// Based on https://github.com/alexeagle/angular-bazel-example/tree/demo

import * as fs from 'fs';
import * as path from 'path';
import * as mkdir from 'mkdirp';

const utf8 = {encoding: 'utf8'};
const divisionNames = [
    'airplane',
    'biofuels'
    // 'catapult',
    // 'deforest',
    // 'emulator',
    // 'flooring',
    // 'graphite',
    // 'humanoid',
    // 'internal',
    // 'joystick',
];

function doGenerate(rootDir: string) {
  // Number of divisions in the company; each division has an app
  const divNum = divisionNames.length;
  // Number of teams working in each app
  const teamNum = 10;
  // Number of modules in each team's part of the app
  const modNum = 10;
  // Number of components in each module
  const cmpNum = 10;
  let currentComponent = 0;

  for (let divCnt = 0; divCnt < divNum; divCnt++) {
    const divName = divisionNames[divCnt]; //`div${divCnt}`;
    const divDeps = [];
    const divModuleImports = [];
    const divModuleNames = [];
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

        for (let cmpCnt = 0; cmpCnt < 10; cmpCnt++) {
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
          const dir = path.join(rootDir, divName, teamName, modName, cmpName);
          mkdir.sync(dir);
          fs.writeFileSync(`${dir}/cmp.ts`, tsContent, utf8);          
          currentComponent++;
        } // for each component

        const moduleClassName = `Module_${divName}_${teamName}_${modName}`;
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
        const dir = path.join(rootDir, divName, teamName, modName);
        teamDeps.push(`//${dir}:${modName}`);        
        fs.writeFileSync(`${dir}/module.ts`, moduleContent, utf8);

      } // for each module
      teamSelectors.push(`${teamName}-nav`);
      const teamModuleClassName = `Module_${divName}_${teamName}`;
      fs.writeFileSync(path.join(rootDir, divName, teamName, "module.ts"), `
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


      divModuleNames.push(teamModuleClassName);
      divModuleImports.push(`import {${teamModuleClassName}} from './${teamName}/module';`);
      divDeps.push(`//${divName}/${teamName}`);
    } // for each team

    const appContent = `
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
${divModuleImports.join('\n')}

@Component({
  selector: 'app',
  template: \`<h1>${divName} division homepage</h1>
  ${teamSelectors.map(s => `<${s}></${s}>`).join("\n")}
  \`,
})
export class AppComponent {}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      ${divModuleNames.join(',\n      ')}
    ],
})
export class AppModule {}
`;
    const mainContent = `
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';

platformBrowserDynamic().bootstrapModule(AppModule);
`;

    const mainAotContent = `
import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from '../../../aot_temp/src/apps/${divName}/app.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    `;
    
    fs.writeFileSync(path.join(rootDir, divName, "app.ts"), appContent, utf8);
    fs.writeFileSync(path.join(rootDir, divName, "main.ts"), mainContent, utf8);    
    fs.writeFileSync(path.join(rootDir, divName, "main.aot.ts"), mainAotContent, utf8);    
  } // for each division
}

function main(argv: string[]): number {
  doGenerate('./src/apps');
  return 0;
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}
