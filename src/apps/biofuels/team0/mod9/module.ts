
import {Component, NgModule} from '@angular/core';
import {Cmp1090Component} from './cmp0/cmp';
import {Cmp1091Component} from './cmp1/cmp';
import {Cmp1092Component} from './cmp2/cmp';
import {Cmp1093Component} from './cmp3/cmp';
import {Cmp1094Component} from './cmp4/cmp';
import {Cmp1095Component} from './cmp5/cmp';
import {Cmp1096Component} from './cmp6/cmp';
import {Cmp1097Component} from './cmp7/cmp';
import {Cmp1098Component} from './cmp8/cmp';
import {Cmp1099Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod9',
  template: '<div>team0: <cmp-1090></cmp-1090><cmp-1091></cmp-1091><cmp-1092></cmp-1092><cmp-1093></cmp-1093><cmp-1094></cmp-1094><cmp-1095></cmp-1095><cmp-1096></cmp-1096><cmp-1097></cmp-1097><cmp-1098></cmp-1098><cmp-1099></cmp-1099></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1090Component,Cmp1091Component,Cmp1092Component,Cmp1093Component,Cmp1094Component,Cmp1095Component,Cmp1096Component,Cmp1097Component,Cmp1098Component,Cmp1099Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod9 {}

        