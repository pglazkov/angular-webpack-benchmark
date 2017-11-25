
import {Component, NgModule} from '@angular/core';
import {Cmp1760Component} from './cmp0/cmp';
import {Cmp1761Component} from './cmp1/cmp';
import {Cmp1762Component} from './cmp2/cmp';
import {Cmp1763Component} from './cmp3/cmp';
import {Cmp1764Component} from './cmp4/cmp';
import {Cmp1765Component} from './cmp5/cmp';
import {Cmp1766Component} from './cmp6/cmp';
import {Cmp1767Component} from './cmp7/cmp';
import {Cmp1768Component} from './cmp8/cmp';
import {Cmp1769Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod6',
  template: '<div>team7: <cmp-1760></cmp-1760><cmp-1761></cmp-1761><cmp-1762></cmp-1762><cmp-1763></cmp-1763><cmp-1764></cmp-1764><cmp-1765></cmp-1765><cmp-1766></cmp-1766><cmp-1767></cmp-1767><cmp-1768></cmp-1768><cmp-1769></cmp-1769></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1760Component,Cmp1761Component,Cmp1762Component,Cmp1763Component,Cmp1764Component,Cmp1765Component,Cmp1766Component,Cmp1767Component,Cmp1768Component,Cmp1769Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod6 {}

        