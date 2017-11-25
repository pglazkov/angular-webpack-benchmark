
import {Component, NgModule} from '@angular/core';
import {Cmp1890Component} from './cmp0/cmp';
import {Cmp1891Component} from './cmp1/cmp';
import {Cmp1892Component} from './cmp2/cmp';
import {Cmp1893Component} from './cmp3/cmp';
import {Cmp1894Component} from './cmp4/cmp';
import {Cmp1895Component} from './cmp5/cmp';
import {Cmp1896Component} from './cmp6/cmp';
import {Cmp1897Component} from './cmp7/cmp';
import {Cmp1898Component} from './cmp8/cmp';
import {Cmp1899Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod9',
  template: '<div>team8: <cmp-1890></cmp-1890><cmp-1891></cmp-1891><cmp-1892></cmp-1892><cmp-1893></cmp-1893><cmp-1894></cmp-1894><cmp-1895></cmp-1895><cmp-1896></cmp-1896><cmp-1897></cmp-1897><cmp-1898></cmp-1898><cmp-1899></cmp-1899></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1890Component,Cmp1891Component,Cmp1892Component,Cmp1893Component,Cmp1894Component,Cmp1895Component,Cmp1896Component,Cmp1897Component,Cmp1898Component,Cmp1899Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod9 {}

        