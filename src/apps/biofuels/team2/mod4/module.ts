
import {Component, NgModule} from '@angular/core';
import {Cmp1240Component} from './cmp0/cmp';
import {Cmp1241Component} from './cmp1/cmp';
import {Cmp1242Component} from './cmp2/cmp';
import {Cmp1243Component} from './cmp3/cmp';
import {Cmp1244Component} from './cmp4/cmp';
import {Cmp1245Component} from './cmp5/cmp';
import {Cmp1246Component} from './cmp6/cmp';
import {Cmp1247Component} from './cmp7/cmp';
import {Cmp1248Component} from './cmp8/cmp';
import {Cmp1249Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod4',
  template: '<div>team2: <cmp-1240></cmp-1240><cmp-1241></cmp-1241><cmp-1242></cmp-1242><cmp-1243></cmp-1243><cmp-1244></cmp-1244><cmp-1245></cmp-1245><cmp-1246></cmp-1246><cmp-1247></cmp-1247><cmp-1248></cmp-1248><cmp-1249></cmp-1249></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1240Component,Cmp1241Component,Cmp1242Component,Cmp1243Component,Cmp1244Component,Cmp1245Component,Cmp1246Component,Cmp1247Component,Cmp1248Component,Cmp1249Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod4 {}

        