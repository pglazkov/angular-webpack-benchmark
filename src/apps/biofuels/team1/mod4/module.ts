
import {Component, NgModule} from '@angular/core';
import {Cmp1140Component} from './cmp0/cmp';
import {Cmp1141Component} from './cmp1/cmp';
import {Cmp1142Component} from './cmp2/cmp';
import {Cmp1143Component} from './cmp3/cmp';
import {Cmp1144Component} from './cmp4/cmp';
import {Cmp1145Component} from './cmp5/cmp';
import {Cmp1146Component} from './cmp6/cmp';
import {Cmp1147Component} from './cmp7/cmp';
import {Cmp1148Component} from './cmp8/cmp';
import {Cmp1149Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod4',
  template: '<div>team1: <cmp-1140></cmp-1140><cmp-1141></cmp-1141><cmp-1142></cmp-1142><cmp-1143></cmp-1143><cmp-1144></cmp-1144><cmp-1145></cmp-1145><cmp-1146></cmp-1146><cmp-1147></cmp-1147><cmp-1148></cmp-1148><cmp-1149></cmp-1149></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1140Component,Cmp1141Component,Cmp1142Component,Cmp1143Component,Cmp1144Component,Cmp1145Component,Cmp1146Component,Cmp1147Component,Cmp1148Component,Cmp1149Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod4 {}

        