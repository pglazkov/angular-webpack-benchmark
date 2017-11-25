
import {Component, NgModule} from '@angular/core';
import {Cmp1100Component} from './cmp0/cmp';
import {Cmp1101Component} from './cmp1/cmp';
import {Cmp1102Component} from './cmp2/cmp';
import {Cmp1103Component} from './cmp3/cmp';
import {Cmp1104Component} from './cmp4/cmp';
import {Cmp1105Component} from './cmp5/cmp';
import {Cmp1106Component} from './cmp6/cmp';
import {Cmp1107Component} from './cmp7/cmp';
import {Cmp1108Component} from './cmp8/cmp';
import {Cmp1109Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod0',
  template: '<div>team1: <cmp-1100></cmp-1100><cmp-1101></cmp-1101><cmp-1102></cmp-1102><cmp-1103></cmp-1103><cmp-1104></cmp-1104><cmp-1105></cmp-1105><cmp-1106></cmp-1106><cmp-1107></cmp-1107><cmp-1108></cmp-1108><cmp-1109></cmp-1109></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1100Component,Cmp1101Component,Cmp1102Component,Cmp1103Component,Cmp1104Component,Cmp1105Component,Cmp1106Component,Cmp1107Component,Cmp1108Component,Cmp1109Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod0 {}

        