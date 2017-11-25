
import {Component, NgModule} from '@angular/core';
import {Cmp1950Component} from './cmp0/cmp';
import {Cmp1951Component} from './cmp1/cmp';
import {Cmp1952Component} from './cmp2/cmp';
import {Cmp1953Component} from './cmp3/cmp';
import {Cmp1954Component} from './cmp4/cmp';
import {Cmp1955Component} from './cmp5/cmp';
import {Cmp1956Component} from './cmp6/cmp';
import {Cmp1957Component} from './cmp7/cmp';
import {Cmp1958Component} from './cmp8/cmp';
import {Cmp1959Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod5',
  template: '<div>team9: <cmp-1950></cmp-1950><cmp-1951></cmp-1951><cmp-1952></cmp-1952><cmp-1953></cmp-1953><cmp-1954></cmp-1954><cmp-1955></cmp-1955><cmp-1956></cmp-1956><cmp-1957></cmp-1957><cmp-1958></cmp-1958><cmp-1959></cmp-1959></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1950Component,Cmp1951Component,Cmp1952Component,Cmp1953Component,Cmp1954Component,Cmp1955Component,Cmp1956Component,Cmp1957Component,Cmp1958Component,Cmp1959Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod5 {}

        