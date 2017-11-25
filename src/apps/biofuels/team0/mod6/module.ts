
import {Component, NgModule} from '@angular/core';
import {Cmp1060Component} from './cmp0/cmp';
import {Cmp1061Component} from './cmp1/cmp';
import {Cmp1062Component} from './cmp2/cmp';
import {Cmp1063Component} from './cmp3/cmp';
import {Cmp1064Component} from './cmp4/cmp';
import {Cmp1065Component} from './cmp5/cmp';
import {Cmp1066Component} from './cmp6/cmp';
import {Cmp1067Component} from './cmp7/cmp';
import {Cmp1068Component} from './cmp8/cmp';
import {Cmp1069Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod6',
  template: '<div>team0: <cmp-1060></cmp-1060><cmp-1061></cmp-1061><cmp-1062></cmp-1062><cmp-1063></cmp-1063><cmp-1064></cmp-1064><cmp-1065></cmp-1065><cmp-1066></cmp-1066><cmp-1067></cmp-1067><cmp-1068></cmp-1068><cmp-1069></cmp-1069></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1060Component,Cmp1061Component,Cmp1062Component,Cmp1063Component,Cmp1064Component,Cmp1065Component,Cmp1066Component,Cmp1067Component,Cmp1068Component,Cmp1069Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod6 {}

        