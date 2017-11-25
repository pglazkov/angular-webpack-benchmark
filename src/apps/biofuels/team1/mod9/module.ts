
import {Component, NgModule} from '@angular/core';
import {Cmp1190Component} from './cmp0/cmp';
import {Cmp1191Component} from './cmp1/cmp';
import {Cmp1192Component} from './cmp2/cmp';
import {Cmp1193Component} from './cmp3/cmp';
import {Cmp1194Component} from './cmp4/cmp';
import {Cmp1195Component} from './cmp5/cmp';
import {Cmp1196Component} from './cmp6/cmp';
import {Cmp1197Component} from './cmp7/cmp';
import {Cmp1198Component} from './cmp8/cmp';
import {Cmp1199Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod9',
  template: '<div>team1: <cmp-1190></cmp-1190><cmp-1191></cmp-1191><cmp-1192></cmp-1192><cmp-1193></cmp-1193><cmp-1194></cmp-1194><cmp-1195></cmp-1195><cmp-1196></cmp-1196><cmp-1197></cmp-1197><cmp-1198></cmp-1198><cmp-1199></cmp-1199></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1190Component,Cmp1191Component,Cmp1192Component,Cmp1193Component,Cmp1194Component,Cmp1195Component,Cmp1196Component,Cmp1197Component,Cmp1198Component,Cmp1199Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod9 {}

        