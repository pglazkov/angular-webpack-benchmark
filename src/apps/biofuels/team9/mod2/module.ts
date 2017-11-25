
import {Component, NgModule} from '@angular/core';
import {Cmp1920Component} from './cmp0/cmp';
import {Cmp1921Component} from './cmp1/cmp';
import {Cmp1922Component} from './cmp2/cmp';
import {Cmp1923Component} from './cmp3/cmp';
import {Cmp1924Component} from './cmp4/cmp';
import {Cmp1925Component} from './cmp5/cmp';
import {Cmp1926Component} from './cmp6/cmp';
import {Cmp1927Component} from './cmp7/cmp';
import {Cmp1928Component} from './cmp8/cmp';
import {Cmp1929Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod2',
  template: '<div>team9: <cmp-1920></cmp-1920><cmp-1921></cmp-1921><cmp-1922></cmp-1922><cmp-1923></cmp-1923><cmp-1924></cmp-1924><cmp-1925></cmp-1925><cmp-1926></cmp-1926><cmp-1927></cmp-1927><cmp-1928></cmp-1928><cmp-1929></cmp-1929></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1920Component,Cmp1921Component,Cmp1922Component,Cmp1923Component,Cmp1924Component,Cmp1925Component,Cmp1926Component,Cmp1927Component,Cmp1928Component,Cmp1929Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod2 {}

        