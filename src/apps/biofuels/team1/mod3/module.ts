
import {Component, NgModule} from '@angular/core';
import {Cmp1130Component} from './cmp0/cmp';
import {Cmp1131Component} from './cmp1/cmp';
import {Cmp1132Component} from './cmp2/cmp';
import {Cmp1133Component} from './cmp3/cmp';
import {Cmp1134Component} from './cmp4/cmp';
import {Cmp1135Component} from './cmp5/cmp';
import {Cmp1136Component} from './cmp6/cmp';
import {Cmp1137Component} from './cmp7/cmp';
import {Cmp1138Component} from './cmp8/cmp';
import {Cmp1139Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod3',
  template: '<div>team1: <cmp-1130></cmp-1130><cmp-1131></cmp-1131><cmp-1132></cmp-1132><cmp-1133></cmp-1133><cmp-1134></cmp-1134><cmp-1135></cmp-1135><cmp-1136></cmp-1136><cmp-1137></cmp-1137><cmp-1138></cmp-1138><cmp-1139></cmp-1139></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1130Component,Cmp1131Component,Cmp1132Component,Cmp1133Component,Cmp1134Component,Cmp1135Component,Cmp1136Component,Cmp1137Component,Cmp1138Component,Cmp1139Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod3 {}

        