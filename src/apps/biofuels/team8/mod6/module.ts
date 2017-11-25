
import {Component, NgModule} from '@angular/core';
import {Cmp1860Component} from './cmp0/cmp';
import {Cmp1861Component} from './cmp1/cmp';
import {Cmp1862Component} from './cmp2/cmp';
import {Cmp1863Component} from './cmp3/cmp';
import {Cmp1864Component} from './cmp4/cmp';
import {Cmp1865Component} from './cmp5/cmp';
import {Cmp1866Component} from './cmp6/cmp';
import {Cmp1867Component} from './cmp7/cmp';
import {Cmp1868Component} from './cmp8/cmp';
import {Cmp1869Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod6',
  template: '<div>team8: <cmp-1860></cmp-1860><cmp-1861></cmp-1861><cmp-1862></cmp-1862><cmp-1863></cmp-1863><cmp-1864></cmp-1864><cmp-1865></cmp-1865><cmp-1866></cmp-1866><cmp-1867></cmp-1867><cmp-1868></cmp-1868><cmp-1869></cmp-1869></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1860Component,Cmp1861Component,Cmp1862Component,Cmp1863Component,Cmp1864Component,Cmp1865Component,Cmp1866Component,Cmp1867Component,Cmp1868Component,Cmp1869Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod6 {}

        