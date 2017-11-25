
import {Component, NgModule} from '@angular/core';
import {Cmp1520Component} from './cmp0/cmp';
import {Cmp1521Component} from './cmp1/cmp';
import {Cmp1522Component} from './cmp2/cmp';
import {Cmp1523Component} from './cmp3/cmp';
import {Cmp1524Component} from './cmp4/cmp';
import {Cmp1525Component} from './cmp5/cmp';
import {Cmp1526Component} from './cmp6/cmp';
import {Cmp1527Component} from './cmp7/cmp';
import {Cmp1528Component} from './cmp8/cmp';
import {Cmp1529Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod2',
  template: '<div>team5: <cmp-1520></cmp-1520><cmp-1521></cmp-1521><cmp-1522></cmp-1522><cmp-1523></cmp-1523><cmp-1524></cmp-1524><cmp-1525></cmp-1525><cmp-1526></cmp-1526><cmp-1527></cmp-1527><cmp-1528></cmp-1528><cmp-1529></cmp-1529></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1520Component,Cmp1521Component,Cmp1522Component,Cmp1523Component,Cmp1524Component,Cmp1525Component,Cmp1526Component,Cmp1527Component,Cmp1528Component,Cmp1529Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod2 {}

        