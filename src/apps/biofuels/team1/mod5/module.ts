
import {Component, NgModule} from '@angular/core';
import {Cmp1150Component} from './cmp0/cmp';
import {Cmp1151Component} from './cmp1/cmp';
import {Cmp1152Component} from './cmp2/cmp';
import {Cmp1153Component} from './cmp3/cmp';
import {Cmp1154Component} from './cmp4/cmp';
import {Cmp1155Component} from './cmp5/cmp';
import {Cmp1156Component} from './cmp6/cmp';
import {Cmp1157Component} from './cmp7/cmp';
import {Cmp1158Component} from './cmp8/cmp';
import {Cmp1159Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod5',
  template: '<div>team1: <cmp-1150></cmp-1150><cmp-1151></cmp-1151><cmp-1152></cmp-1152><cmp-1153></cmp-1153><cmp-1154></cmp-1154><cmp-1155></cmp-1155><cmp-1156></cmp-1156><cmp-1157></cmp-1157><cmp-1158></cmp-1158><cmp-1159></cmp-1159></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1150Component,Cmp1151Component,Cmp1152Component,Cmp1153Component,Cmp1154Component,Cmp1155Component,Cmp1156Component,Cmp1157Component,Cmp1158Component,Cmp1159Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod5 {}

        