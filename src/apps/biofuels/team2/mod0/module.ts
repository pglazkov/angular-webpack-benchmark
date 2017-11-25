
import {Component, NgModule} from '@angular/core';
import {Cmp1200Component} from './cmp0/cmp';
import {Cmp1201Component} from './cmp1/cmp';
import {Cmp1202Component} from './cmp2/cmp';
import {Cmp1203Component} from './cmp3/cmp';
import {Cmp1204Component} from './cmp4/cmp';
import {Cmp1205Component} from './cmp5/cmp';
import {Cmp1206Component} from './cmp6/cmp';
import {Cmp1207Component} from './cmp7/cmp';
import {Cmp1208Component} from './cmp8/cmp';
import {Cmp1209Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod0',
  template: '<div>team2: <cmp-1200></cmp-1200><cmp-1201></cmp-1201><cmp-1202></cmp-1202><cmp-1203></cmp-1203><cmp-1204></cmp-1204><cmp-1205></cmp-1205><cmp-1206></cmp-1206><cmp-1207></cmp-1207><cmp-1208></cmp-1208><cmp-1209></cmp-1209></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1200Component,Cmp1201Component,Cmp1202Component,Cmp1203Component,Cmp1204Component,Cmp1205Component,Cmp1206Component,Cmp1207Component,Cmp1208Component,Cmp1209Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod0 {}

        