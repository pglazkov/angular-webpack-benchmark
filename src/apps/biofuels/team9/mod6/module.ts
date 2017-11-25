
import {Component, NgModule} from '@angular/core';
import {Cmp1960Component} from './cmp0/cmp';
import {Cmp1961Component} from './cmp1/cmp';
import {Cmp1962Component} from './cmp2/cmp';
import {Cmp1963Component} from './cmp3/cmp';
import {Cmp1964Component} from './cmp4/cmp';
import {Cmp1965Component} from './cmp5/cmp';
import {Cmp1966Component} from './cmp6/cmp';
import {Cmp1967Component} from './cmp7/cmp';
import {Cmp1968Component} from './cmp8/cmp';
import {Cmp1969Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod6',
  template: '<div>team9: <cmp-1960></cmp-1960><cmp-1961></cmp-1961><cmp-1962></cmp-1962><cmp-1963></cmp-1963><cmp-1964></cmp-1964><cmp-1965></cmp-1965><cmp-1966></cmp-1966><cmp-1967></cmp-1967><cmp-1968></cmp-1968><cmp-1969></cmp-1969></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1960Component,Cmp1961Component,Cmp1962Component,Cmp1963Component,Cmp1964Component,Cmp1965Component,Cmp1966Component,Cmp1967Component,Cmp1968Component,Cmp1969Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod6 {}

        