
import {Component, NgModule} from '@angular/core';
import {Cmp1770Component} from './cmp0/cmp';
import {Cmp1771Component} from './cmp1/cmp';
import {Cmp1772Component} from './cmp2/cmp';
import {Cmp1773Component} from './cmp3/cmp';
import {Cmp1774Component} from './cmp4/cmp';
import {Cmp1775Component} from './cmp5/cmp';
import {Cmp1776Component} from './cmp6/cmp';
import {Cmp1777Component} from './cmp7/cmp';
import {Cmp1778Component} from './cmp8/cmp';
import {Cmp1779Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod7',
  template: '<div>team7: <cmp-1770></cmp-1770><cmp-1771></cmp-1771><cmp-1772></cmp-1772><cmp-1773></cmp-1773><cmp-1774></cmp-1774><cmp-1775></cmp-1775><cmp-1776></cmp-1776><cmp-1777></cmp-1777><cmp-1778></cmp-1778><cmp-1779></cmp-1779></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1770Component,Cmp1771Component,Cmp1772Component,Cmp1773Component,Cmp1774Component,Cmp1775Component,Cmp1776Component,Cmp1777Component,Cmp1778Component,Cmp1779Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod7 {}

        