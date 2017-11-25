
import {Component, NgModule} from '@angular/core';
import {Cmp1650Component} from './cmp0/cmp';
import {Cmp1651Component} from './cmp1/cmp';
import {Cmp1652Component} from './cmp2/cmp';
import {Cmp1653Component} from './cmp3/cmp';
import {Cmp1654Component} from './cmp4/cmp';
import {Cmp1655Component} from './cmp5/cmp';
import {Cmp1656Component} from './cmp6/cmp';
import {Cmp1657Component} from './cmp7/cmp';
import {Cmp1658Component} from './cmp8/cmp';
import {Cmp1659Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod5',
  template: '<div>team6: <cmp-1650></cmp-1650><cmp-1651></cmp-1651><cmp-1652></cmp-1652><cmp-1653></cmp-1653><cmp-1654></cmp-1654><cmp-1655></cmp-1655><cmp-1656></cmp-1656><cmp-1657></cmp-1657><cmp-1658></cmp-1658><cmp-1659></cmp-1659></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1650Component,Cmp1651Component,Cmp1652Component,Cmp1653Component,Cmp1654Component,Cmp1655Component,Cmp1656Component,Cmp1657Component,Cmp1658Component,Cmp1659Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod5 {}

        