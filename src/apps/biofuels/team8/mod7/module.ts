
import {Component, NgModule} from '@angular/core';
import {Cmp1870Component} from './cmp0/cmp';
import {Cmp1871Component} from './cmp1/cmp';
import {Cmp1872Component} from './cmp2/cmp';
import {Cmp1873Component} from './cmp3/cmp';
import {Cmp1874Component} from './cmp4/cmp';
import {Cmp1875Component} from './cmp5/cmp';
import {Cmp1876Component} from './cmp6/cmp';
import {Cmp1877Component} from './cmp7/cmp';
import {Cmp1878Component} from './cmp8/cmp';
import {Cmp1879Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod7',
  template: '<div>team8: <cmp-1870></cmp-1870><cmp-1871></cmp-1871><cmp-1872></cmp-1872><cmp-1873></cmp-1873><cmp-1874></cmp-1874><cmp-1875></cmp-1875><cmp-1876></cmp-1876><cmp-1877></cmp-1877><cmp-1878></cmp-1878><cmp-1879></cmp-1879></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1870Component,Cmp1871Component,Cmp1872Component,Cmp1873Component,Cmp1874Component,Cmp1875Component,Cmp1876Component,Cmp1877Component,Cmp1878Component,Cmp1879Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod7 {}

        