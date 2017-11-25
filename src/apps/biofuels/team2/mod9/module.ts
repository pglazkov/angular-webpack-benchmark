
import {Component, NgModule} from '@angular/core';
import {Cmp1290Component} from './cmp0/cmp';
import {Cmp1291Component} from './cmp1/cmp';
import {Cmp1292Component} from './cmp2/cmp';
import {Cmp1293Component} from './cmp3/cmp';
import {Cmp1294Component} from './cmp4/cmp';
import {Cmp1295Component} from './cmp5/cmp';
import {Cmp1296Component} from './cmp6/cmp';
import {Cmp1297Component} from './cmp7/cmp';
import {Cmp1298Component} from './cmp8/cmp';
import {Cmp1299Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod9',
  template: '<div>team2: <cmp-1290></cmp-1290><cmp-1291></cmp-1291><cmp-1292></cmp-1292><cmp-1293></cmp-1293><cmp-1294></cmp-1294><cmp-1295></cmp-1295><cmp-1296></cmp-1296><cmp-1297></cmp-1297><cmp-1298></cmp-1298><cmp-1299></cmp-1299></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1290Component,Cmp1291Component,Cmp1292Component,Cmp1293Component,Cmp1294Component,Cmp1295Component,Cmp1296Component,Cmp1297Component,Cmp1298Component,Cmp1299Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod9 {}

        