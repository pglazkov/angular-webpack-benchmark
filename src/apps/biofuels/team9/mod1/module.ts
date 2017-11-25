
import {Component, NgModule} from '@angular/core';
import {Cmp1910Component} from './cmp0/cmp';
import {Cmp1911Component} from './cmp1/cmp';
import {Cmp1912Component} from './cmp2/cmp';
import {Cmp1913Component} from './cmp3/cmp';
import {Cmp1914Component} from './cmp4/cmp';
import {Cmp1915Component} from './cmp5/cmp';
import {Cmp1916Component} from './cmp6/cmp';
import {Cmp1917Component} from './cmp7/cmp';
import {Cmp1918Component} from './cmp8/cmp';
import {Cmp1919Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod1',
  template: '<div>team9: <cmp-1910></cmp-1910><cmp-1911></cmp-1911><cmp-1912></cmp-1912><cmp-1913></cmp-1913><cmp-1914></cmp-1914><cmp-1915></cmp-1915><cmp-1916></cmp-1916><cmp-1917></cmp-1917><cmp-1918></cmp-1918><cmp-1919></cmp-1919></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1910Component,Cmp1911Component,Cmp1912Component,Cmp1913Component,Cmp1914Component,Cmp1915Component,Cmp1916Component,Cmp1917Component,Cmp1918Component,Cmp1919Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod1 {}

        