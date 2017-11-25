
import {Component, NgModule} from '@angular/core';
import {Cmp1460Component} from './cmp0/cmp';
import {Cmp1461Component} from './cmp1/cmp';
import {Cmp1462Component} from './cmp2/cmp';
import {Cmp1463Component} from './cmp3/cmp';
import {Cmp1464Component} from './cmp4/cmp';
import {Cmp1465Component} from './cmp5/cmp';
import {Cmp1466Component} from './cmp6/cmp';
import {Cmp1467Component} from './cmp7/cmp';
import {Cmp1468Component} from './cmp8/cmp';
import {Cmp1469Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod6',
  template: '<div>team4: <cmp-1460></cmp-1460><cmp-1461></cmp-1461><cmp-1462></cmp-1462><cmp-1463></cmp-1463><cmp-1464></cmp-1464><cmp-1465></cmp-1465><cmp-1466></cmp-1466><cmp-1467></cmp-1467><cmp-1468></cmp-1468><cmp-1469></cmp-1469></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1460Component,Cmp1461Component,Cmp1462Component,Cmp1463Component,Cmp1464Component,Cmp1465Component,Cmp1466Component,Cmp1467Component,Cmp1468Component,Cmp1469Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod6 {}

        