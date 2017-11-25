
import {Component, NgModule} from '@angular/core';
import {Cmp1080Component} from './cmp0/cmp';
import {Cmp1081Component} from './cmp1/cmp';
import {Cmp1082Component} from './cmp2/cmp';
import {Cmp1083Component} from './cmp3/cmp';
import {Cmp1084Component} from './cmp4/cmp';
import {Cmp1085Component} from './cmp5/cmp';
import {Cmp1086Component} from './cmp6/cmp';
import {Cmp1087Component} from './cmp7/cmp';
import {Cmp1088Component} from './cmp8/cmp';
import {Cmp1089Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod8',
  template: '<div>team0: <cmp-1080></cmp-1080><cmp-1081></cmp-1081><cmp-1082></cmp-1082><cmp-1083></cmp-1083><cmp-1084></cmp-1084><cmp-1085></cmp-1085><cmp-1086></cmp-1086><cmp-1087></cmp-1087><cmp-1088></cmp-1088><cmp-1089></cmp-1089></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1080Component,Cmp1081Component,Cmp1082Component,Cmp1083Component,Cmp1084Component,Cmp1085Component,Cmp1086Component,Cmp1087Component,Cmp1088Component,Cmp1089Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod8 {}

        