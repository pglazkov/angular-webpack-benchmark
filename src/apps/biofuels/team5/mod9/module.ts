
import {Component, NgModule} from '@angular/core';
import {Cmp1590Component} from './cmp0/cmp';
import {Cmp1591Component} from './cmp1/cmp';
import {Cmp1592Component} from './cmp2/cmp';
import {Cmp1593Component} from './cmp3/cmp';
import {Cmp1594Component} from './cmp4/cmp';
import {Cmp1595Component} from './cmp5/cmp';
import {Cmp1596Component} from './cmp6/cmp';
import {Cmp1597Component} from './cmp7/cmp';
import {Cmp1598Component} from './cmp8/cmp';
import {Cmp1599Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod9',
  template: '<div>team5: <cmp-1590></cmp-1590><cmp-1591></cmp-1591><cmp-1592></cmp-1592><cmp-1593></cmp-1593><cmp-1594></cmp-1594><cmp-1595></cmp-1595><cmp-1596></cmp-1596><cmp-1597></cmp-1597><cmp-1598></cmp-1598><cmp-1599></cmp-1599></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1590Component,Cmp1591Component,Cmp1592Component,Cmp1593Component,Cmp1594Component,Cmp1595Component,Cmp1596Component,Cmp1597Component,Cmp1598Component,Cmp1599Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod9 {}

        