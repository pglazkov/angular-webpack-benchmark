
import {Component, NgModule} from '@angular/core';
import {Cmp1640Component} from './cmp0/cmp';
import {Cmp1641Component} from './cmp1/cmp';
import {Cmp1642Component} from './cmp2/cmp';
import {Cmp1643Component} from './cmp3/cmp';
import {Cmp1644Component} from './cmp4/cmp';
import {Cmp1645Component} from './cmp5/cmp';
import {Cmp1646Component} from './cmp6/cmp';
import {Cmp1647Component} from './cmp7/cmp';
import {Cmp1648Component} from './cmp8/cmp';
import {Cmp1649Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod4',
  template: '<div>team6: <cmp-1640></cmp-1640><cmp-1641></cmp-1641><cmp-1642></cmp-1642><cmp-1643></cmp-1643><cmp-1644></cmp-1644><cmp-1645></cmp-1645><cmp-1646></cmp-1646><cmp-1647></cmp-1647><cmp-1648></cmp-1648><cmp-1649></cmp-1649></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1640Component,Cmp1641Component,Cmp1642Component,Cmp1643Component,Cmp1644Component,Cmp1645Component,Cmp1646Component,Cmp1647Component,Cmp1648Component,Cmp1649Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod4 {}

        