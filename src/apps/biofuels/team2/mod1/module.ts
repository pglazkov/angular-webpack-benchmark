
import {Component, NgModule} from '@angular/core';
import {Cmp1210Component} from './cmp0/cmp';
import {Cmp1211Component} from './cmp1/cmp';
import {Cmp1212Component} from './cmp2/cmp';
import {Cmp1213Component} from './cmp3/cmp';
import {Cmp1214Component} from './cmp4/cmp';
import {Cmp1215Component} from './cmp5/cmp';
import {Cmp1216Component} from './cmp6/cmp';
import {Cmp1217Component} from './cmp7/cmp';
import {Cmp1218Component} from './cmp8/cmp';
import {Cmp1219Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod1',
  template: '<div>team2: <cmp-1210></cmp-1210><cmp-1211></cmp-1211><cmp-1212></cmp-1212><cmp-1213></cmp-1213><cmp-1214></cmp-1214><cmp-1215></cmp-1215><cmp-1216></cmp-1216><cmp-1217></cmp-1217><cmp-1218></cmp-1218><cmp-1219></cmp-1219></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1210Component,Cmp1211Component,Cmp1212Component,Cmp1213Component,Cmp1214Component,Cmp1215Component,Cmp1216Component,Cmp1217Component,Cmp1218Component,Cmp1219Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod1 {}

        