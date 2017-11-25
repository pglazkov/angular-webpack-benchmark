
import {Component, NgModule} from '@angular/core';
import {Cmp1160Component} from './cmp0/cmp';
import {Cmp1161Component} from './cmp1/cmp';
import {Cmp1162Component} from './cmp2/cmp';
import {Cmp1163Component} from './cmp3/cmp';
import {Cmp1164Component} from './cmp4/cmp';
import {Cmp1165Component} from './cmp5/cmp';
import {Cmp1166Component} from './cmp6/cmp';
import {Cmp1167Component} from './cmp7/cmp';
import {Cmp1168Component} from './cmp8/cmp';
import {Cmp1169Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod6',
  template: '<div>team1: <cmp-1160></cmp-1160><cmp-1161></cmp-1161><cmp-1162></cmp-1162><cmp-1163></cmp-1163><cmp-1164></cmp-1164><cmp-1165></cmp-1165><cmp-1166></cmp-1166><cmp-1167></cmp-1167><cmp-1168></cmp-1168><cmp-1169></cmp-1169></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1160Component,Cmp1161Component,Cmp1162Component,Cmp1163Component,Cmp1164Component,Cmp1165Component,Cmp1166Component,Cmp1167Component,Cmp1168Component,Cmp1169Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod6 {}

        