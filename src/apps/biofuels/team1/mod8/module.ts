
import {Component, NgModule} from '@angular/core';
import {Cmp1180Component} from './cmp0/cmp';
import {Cmp1181Component} from './cmp1/cmp';
import {Cmp1182Component} from './cmp2/cmp';
import {Cmp1183Component} from './cmp3/cmp';
import {Cmp1184Component} from './cmp4/cmp';
import {Cmp1185Component} from './cmp5/cmp';
import {Cmp1186Component} from './cmp6/cmp';
import {Cmp1187Component} from './cmp7/cmp';
import {Cmp1188Component} from './cmp8/cmp';
import {Cmp1189Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod8',
  template: '<div>team1: <cmp-1180></cmp-1180><cmp-1181></cmp-1181><cmp-1182></cmp-1182><cmp-1183></cmp-1183><cmp-1184></cmp-1184><cmp-1185></cmp-1185><cmp-1186></cmp-1186><cmp-1187></cmp-1187><cmp-1188></cmp-1188><cmp-1189></cmp-1189></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1180Component,Cmp1181Component,Cmp1182Component,Cmp1183Component,Cmp1184Component,Cmp1185Component,Cmp1186Component,Cmp1187Component,Cmp1188Component,Cmp1189Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod8 {}

        