
import {Component, NgModule} from '@angular/core';
import {Cmp1620Component} from './cmp0/cmp';
import {Cmp1621Component} from './cmp1/cmp';
import {Cmp1622Component} from './cmp2/cmp';
import {Cmp1623Component} from './cmp3/cmp';
import {Cmp1624Component} from './cmp4/cmp';
import {Cmp1625Component} from './cmp5/cmp';
import {Cmp1626Component} from './cmp6/cmp';
import {Cmp1627Component} from './cmp7/cmp';
import {Cmp1628Component} from './cmp8/cmp';
import {Cmp1629Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod2',
  template: '<div>team6: <cmp-1620></cmp-1620><cmp-1621></cmp-1621><cmp-1622></cmp-1622><cmp-1623></cmp-1623><cmp-1624></cmp-1624><cmp-1625></cmp-1625><cmp-1626></cmp-1626><cmp-1627></cmp-1627><cmp-1628></cmp-1628><cmp-1629></cmp-1629></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1620Component,Cmp1621Component,Cmp1622Component,Cmp1623Component,Cmp1624Component,Cmp1625Component,Cmp1626Component,Cmp1627Component,Cmp1628Component,Cmp1629Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod2 {}

        