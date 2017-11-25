
import {Component, NgModule} from '@angular/core';
import {Cmp1900Component} from './cmp0/cmp';
import {Cmp1901Component} from './cmp1/cmp';
import {Cmp1902Component} from './cmp2/cmp';
import {Cmp1903Component} from './cmp3/cmp';
import {Cmp1904Component} from './cmp4/cmp';
import {Cmp1905Component} from './cmp5/cmp';
import {Cmp1906Component} from './cmp6/cmp';
import {Cmp1907Component} from './cmp7/cmp';
import {Cmp1908Component} from './cmp8/cmp';
import {Cmp1909Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod0',
  template: '<div>team9: <cmp-1900></cmp-1900><cmp-1901></cmp-1901><cmp-1902></cmp-1902><cmp-1903></cmp-1903><cmp-1904></cmp-1904><cmp-1905></cmp-1905><cmp-1906></cmp-1906><cmp-1907></cmp-1907><cmp-1908></cmp-1908><cmp-1909></cmp-1909></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1900Component,Cmp1901Component,Cmp1902Component,Cmp1903Component,Cmp1904Component,Cmp1905Component,Cmp1906Component,Cmp1907Component,Cmp1908Component,Cmp1909Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod0 {}

        