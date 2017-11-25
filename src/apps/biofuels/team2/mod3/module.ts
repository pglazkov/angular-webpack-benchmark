
import {Component, NgModule} from '@angular/core';
import {Cmp1230Component} from './cmp0/cmp';
import {Cmp1231Component} from './cmp1/cmp';
import {Cmp1232Component} from './cmp2/cmp';
import {Cmp1233Component} from './cmp3/cmp';
import {Cmp1234Component} from './cmp4/cmp';
import {Cmp1235Component} from './cmp5/cmp';
import {Cmp1236Component} from './cmp6/cmp';
import {Cmp1237Component} from './cmp7/cmp';
import {Cmp1238Component} from './cmp8/cmp';
import {Cmp1239Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod3',
  template: '<div>team2: <cmp-1230></cmp-1230><cmp-1231></cmp-1231><cmp-1232></cmp-1232><cmp-1233></cmp-1233><cmp-1234></cmp-1234><cmp-1235></cmp-1235><cmp-1236></cmp-1236><cmp-1237></cmp-1237><cmp-1238></cmp-1238><cmp-1239></cmp-1239></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1230Component,Cmp1231Component,Cmp1232Component,Cmp1233Component,Cmp1234Component,Cmp1235Component,Cmp1236Component,Cmp1237Component,Cmp1238Component,Cmp1239Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod3 {}

        