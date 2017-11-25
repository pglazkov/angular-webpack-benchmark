
import {Component, NgModule} from '@angular/core';
import {Cmp1220Component} from './cmp0/cmp';
import {Cmp1221Component} from './cmp1/cmp';
import {Cmp1222Component} from './cmp2/cmp';
import {Cmp1223Component} from './cmp3/cmp';
import {Cmp1224Component} from './cmp4/cmp';
import {Cmp1225Component} from './cmp5/cmp';
import {Cmp1226Component} from './cmp6/cmp';
import {Cmp1227Component} from './cmp7/cmp';
import {Cmp1228Component} from './cmp8/cmp';
import {Cmp1229Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod2',
  template: '<div>team2: <cmp-1220></cmp-1220><cmp-1221></cmp-1221><cmp-1222></cmp-1222><cmp-1223></cmp-1223><cmp-1224></cmp-1224><cmp-1225></cmp-1225><cmp-1226></cmp-1226><cmp-1227></cmp-1227><cmp-1228></cmp-1228><cmp-1229></cmp-1229></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1220Component,Cmp1221Component,Cmp1222Component,Cmp1223Component,Cmp1224Component,Cmp1225Component,Cmp1226Component,Cmp1227Component,Cmp1228Component,Cmp1229Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod2 {}

        