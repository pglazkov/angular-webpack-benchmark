
import {Component, NgModule} from '@angular/core';
import {Cmp1610Component} from './cmp0/cmp';
import {Cmp1611Component} from './cmp1/cmp';
import {Cmp1612Component} from './cmp2/cmp';
import {Cmp1613Component} from './cmp3/cmp';
import {Cmp1614Component} from './cmp4/cmp';
import {Cmp1615Component} from './cmp5/cmp';
import {Cmp1616Component} from './cmp6/cmp';
import {Cmp1617Component} from './cmp7/cmp';
import {Cmp1618Component} from './cmp8/cmp';
import {Cmp1619Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod1',
  template: '<div>team6: <cmp-1610></cmp-1610><cmp-1611></cmp-1611><cmp-1612></cmp-1612><cmp-1613></cmp-1613><cmp-1614></cmp-1614><cmp-1615></cmp-1615><cmp-1616></cmp-1616><cmp-1617></cmp-1617><cmp-1618></cmp-1618><cmp-1619></cmp-1619></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1610Component,Cmp1611Component,Cmp1612Component,Cmp1613Component,Cmp1614Component,Cmp1615Component,Cmp1616Component,Cmp1617Component,Cmp1618Component,Cmp1619Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod1 {}

        