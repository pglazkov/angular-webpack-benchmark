
import {Component, NgModule} from '@angular/core';
import {Cmp1000Component} from './cmp0/cmp';
import {Cmp1001Component} from './cmp1/cmp';
import {Cmp1002Component} from './cmp2/cmp';
import {Cmp1003Component} from './cmp3/cmp';
import {Cmp1004Component} from './cmp4/cmp';
import {Cmp1005Component} from './cmp5/cmp';
import {Cmp1006Component} from './cmp6/cmp';
import {Cmp1007Component} from './cmp7/cmp';
import {Cmp1008Component} from './cmp8/cmp';
import {Cmp1009Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod0',
  template: '<div>team0: <cmp-1000></cmp-1000><cmp-1001></cmp-1001><cmp-1002></cmp-1002><cmp-1003></cmp-1003><cmp-1004></cmp-1004><cmp-1005></cmp-1005><cmp-1006></cmp-1006><cmp-1007></cmp-1007><cmp-1008></cmp-1008><cmp-1009></cmp-1009></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1000Component,Cmp1001Component,Cmp1002Component,Cmp1003Component,Cmp1004Component,Cmp1005Component,Cmp1006Component,Cmp1007Component,Cmp1008Component,Cmp1009Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod0 {}

        