
import {Component, NgModule} from '@angular/core';
import {Cmp1810Component} from './cmp0/cmp';
import {Cmp1811Component} from './cmp1/cmp';
import {Cmp1812Component} from './cmp2/cmp';
import {Cmp1813Component} from './cmp3/cmp';
import {Cmp1814Component} from './cmp4/cmp';
import {Cmp1815Component} from './cmp5/cmp';
import {Cmp1816Component} from './cmp6/cmp';
import {Cmp1817Component} from './cmp7/cmp';
import {Cmp1818Component} from './cmp8/cmp';
import {Cmp1819Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod1',
  template: '<div>team8: <cmp-1810></cmp-1810><cmp-1811></cmp-1811><cmp-1812></cmp-1812><cmp-1813></cmp-1813><cmp-1814></cmp-1814><cmp-1815></cmp-1815><cmp-1816></cmp-1816><cmp-1817></cmp-1817><cmp-1818></cmp-1818><cmp-1819></cmp-1819></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1810Component,Cmp1811Component,Cmp1812Component,Cmp1813Component,Cmp1814Component,Cmp1815Component,Cmp1816Component,Cmp1817Component,Cmp1818Component,Cmp1819Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod1 {}

        