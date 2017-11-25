
import {Component, NgModule} from '@angular/core';
import {Cmp1830Component} from './cmp0/cmp';
import {Cmp1831Component} from './cmp1/cmp';
import {Cmp1832Component} from './cmp2/cmp';
import {Cmp1833Component} from './cmp3/cmp';
import {Cmp1834Component} from './cmp4/cmp';
import {Cmp1835Component} from './cmp5/cmp';
import {Cmp1836Component} from './cmp6/cmp';
import {Cmp1837Component} from './cmp7/cmp';
import {Cmp1838Component} from './cmp8/cmp';
import {Cmp1839Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod3',
  template: '<div>team8: <cmp-1830></cmp-1830><cmp-1831></cmp-1831><cmp-1832></cmp-1832><cmp-1833></cmp-1833><cmp-1834></cmp-1834><cmp-1835></cmp-1835><cmp-1836></cmp-1836><cmp-1837></cmp-1837><cmp-1838></cmp-1838><cmp-1839></cmp-1839></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1830Component,Cmp1831Component,Cmp1832Component,Cmp1833Component,Cmp1834Component,Cmp1835Component,Cmp1836Component,Cmp1837Component,Cmp1838Component,Cmp1839Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod3 {}

        