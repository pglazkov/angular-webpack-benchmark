
import {Component, NgModule} from '@angular/core';
import {Cmp1270Component} from './cmp0/cmp';
import {Cmp1271Component} from './cmp1/cmp';
import {Cmp1272Component} from './cmp2/cmp';
import {Cmp1273Component} from './cmp3/cmp';
import {Cmp1274Component} from './cmp4/cmp';
import {Cmp1275Component} from './cmp5/cmp';
import {Cmp1276Component} from './cmp6/cmp';
import {Cmp1277Component} from './cmp7/cmp';
import {Cmp1278Component} from './cmp8/cmp';
import {Cmp1279Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod7',
  template: '<div>team2: <cmp-1270></cmp-1270><cmp-1271></cmp-1271><cmp-1272></cmp-1272><cmp-1273></cmp-1273><cmp-1274></cmp-1274><cmp-1275></cmp-1275><cmp-1276></cmp-1276><cmp-1277></cmp-1277><cmp-1278></cmp-1278><cmp-1279></cmp-1279></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1270Component,Cmp1271Component,Cmp1272Component,Cmp1273Component,Cmp1274Component,Cmp1275Component,Cmp1276Component,Cmp1277Component,Cmp1278Component,Cmp1279Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod7 {}

        