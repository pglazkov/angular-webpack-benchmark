
import {Component, NgModule} from '@angular/core';
import {Cmp1110Component} from './cmp0/cmp';
import {Cmp1111Component} from './cmp1/cmp';
import {Cmp1112Component} from './cmp2/cmp';
import {Cmp1113Component} from './cmp3/cmp';
import {Cmp1114Component} from './cmp4/cmp';
import {Cmp1115Component} from './cmp5/cmp';
import {Cmp1116Component} from './cmp6/cmp';
import {Cmp1117Component} from './cmp7/cmp';
import {Cmp1118Component} from './cmp8/cmp';
import {Cmp1119Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod1',
  template: '<div>team1: <cmp-1110></cmp-1110><cmp-1111></cmp-1111><cmp-1112></cmp-1112><cmp-1113></cmp-1113><cmp-1114></cmp-1114><cmp-1115></cmp-1115><cmp-1116></cmp-1116><cmp-1117></cmp-1117><cmp-1118></cmp-1118><cmp-1119></cmp-1119></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1110Component,Cmp1111Component,Cmp1112Component,Cmp1113Component,Cmp1114Component,Cmp1115Component,Cmp1116Component,Cmp1117Component,Cmp1118Component,Cmp1119Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod1 {}

        