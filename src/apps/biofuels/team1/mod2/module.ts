
import {Component, NgModule} from '@angular/core';
import {Cmp1120Component} from './cmp0/cmp';
import {Cmp1121Component} from './cmp1/cmp';
import {Cmp1122Component} from './cmp2/cmp';
import {Cmp1123Component} from './cmp3/cmp';
import {Cmp1124Component} from './cmp4/cmp';
import {Cmp1125Component} from './cmp5/cmp';
import {Cmp1126Component} from './cmp6/cmp';
import {Cmp1127Component} from './cmp7/cmp';
import {Cmp1128Component} from './cmp8/cmp';
import {Cmp1129Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod2',
  template: '<div>team1: <cmp-1120></cmp-1120><cmp-1121></cmp-1121><cmp-1122></cmp-1122><cmp-1123></cmp-1123><cmp-1124></cmp-1124><cmp-1125></cmp-1125><cmp-1126></cmp-1126><cmp-1127></cmp-1127><cmp-1128></cmp-1128><cmp-1129></cmp-1129></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1120Component,Cmp1121Component,Cmp1122Component,Cmp1123Component,Cmp1124Component,Cmp1125Component,Cmp1126Component,Cmp1127Component,Cmp1128Component,Cmp1129Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod2 {}

        