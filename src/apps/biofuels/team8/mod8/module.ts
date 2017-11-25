
import {Component, NgModule} from '@angular/core';
import {Cmp1880Component} from './cmp0/cmp';
import {Cmp1881Component} from './cmp1/cmp';
import {Cmp1882Component} from './cmp2/cmp';
import {Cmp1883Component} from './cmp3/cmp';
import {Cmp1884Component} from './cmp4/cmp';
import {Cmp1885Component} from './cmp5/cmp';
import {Cmp1886Component} from './cmp6/cmp';
import {Cmp1887Component} from './cmp7/cmp';
import {Cmp1888Component} from './cmp8/cmp';
import {Cmp1889Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod8',
  template: '<div>team8: <cmp-1880></cmp-1880><cmp-1881></cmp-1881><cmp-1882></cmp-1882><cmp-1883></cmp-1883><cmp-1884></cmp-1884><cmp-1885></cmp-1885><cmp-1886></cmp-1886><cmp-1887></cmp-1887><cmp-1888></cmp-1888><cmp-1889></cmp-1889></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1880Component,Cmp1881Component,Cmp1882Component,Cmp1883Component,Cmp1884Component,Cmp1885Component,Cmp1886Component,Cmp1887Component,Cmp1888Component,Cmp1889Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod8 {}

        