
import {Component, NgModule} from '@angular/core';
import {Cmp1260Component} from './cmp0/cmp';
import {Cmp1261Component} from './cmp1/cmp';
import {Cmp1262Component} from './cmp2/cmp';
import {Cmp1263Component} from './cmp3/cmp';
import {Cmp1264Component} from './cmp4/cmp';
import {Cmp1265Component} from './cmp5/cmp';
import {Cmp1266Component} from './cmp6/cmp';
import {Cmp1267Component} from './cmp7/cmp';
import {Cmp1268Component} from './cmp8/cmp';
import {Cmp1269Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod6',
  template: '<div>team2: <cmp-1260></cmp-1260><cmp-1261></cmp-1261><cmp-1262></cmp-1262><cmp-1263></cmp-1263><cmp-1264></cmp-1264><cmp-1265></cmp-1265><cmp-1266></cmp-1266><cmp-1267></cmp-1267><cmp-1268></cmp-1268><cmp-1269></cmp-1269></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1260Component,Cmp1261Component,Cmp1262Component,Cmp1263Component,Cmp1264Component,Cmp1265Component,Cmp1266Component,Cmp1267Component,Cmp1268Component,Cmp1269Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod6 {}

        