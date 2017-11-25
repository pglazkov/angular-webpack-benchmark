
import {Component, NgModule} from '@angular/core';
import {Cmp1840Component} from './cmp0/cmp';
import {Cmp1841Component} from './cmp1/cmp';
import {Cmp1842Component} from './cmp2/cmp';
import {Cmp1843Component} from './cmp3/cmp';
import {Cmp1844Component} from './cmp4/cmp';
import {Cmp1845Component} from './cmp5/cmp';
import {Cmp1846Component} from './cmp6/cmp';
import {Cmp1847Component} from './cmp7/cmp';
import {Cmp1848Component} from './cmp8/cmp';
import {Cmp1849Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod4',
  template: '<div>team8: <cmp-1840></cmp-1840><cmp-1841></cmp-1841><cmp-1842></cmp-1842><cmp-1843></cmp-1843><cmp-1844></cmp-1844><cmp-1845></cmp-1845><cmp-1846></cmp-1846><cmp-1847></cmp-1847><cmp-1848></cmp-1848><cmp-1849></cmp-1849></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1840Component,Cmp1841Component,Cmp1842Component,Cmp1843Component,Cmp1844Component,Cmp1845Component,Cmp1846Component,Cmp1847Component,Cmp1848Component,Cmp1849Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod4 {}

        