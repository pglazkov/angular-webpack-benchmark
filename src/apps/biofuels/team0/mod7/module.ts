
import {Component, NgModule} from '@angular/core';
import {Cmp1070Component} from './cmp0/cmp';
import {Cmp1071Component} from './cmp1/cmp';
import {Cmp1072Component} from './cmp2/cmp';
import {Cmp1073Component} from './cmp3/cmp';
import {Cmp1074Component} from './cmp4/cmp';
import {Cmp1075Component} from './cmp5/cmp';
import {Cmp1076Component} from './cmp6/cmp';
import {Cmp1077Component} from './cmp7/cmp';
import {Cmp1078Component} from './cmp8/cmp';
import {Cmp1079Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod7',
  template: '<div>team0: <cmp-1070></cmp-1070><cmp-1071></cmp-1071><cmp-1072></cmp-1072><cmp-1073></cmp-1073><cmp-1074></cmp-1074><cmp-1075></cmp-1075><cmp-1076></cmp-1076><cmp-1077></cmp-1077><cmp-1078></cmp-1078><cmp-1079></cmp-1079></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1070Component,Cmp1071Component,Cmp1072Component,Cmp1073Component,Cmp1074Component,Cmp1075Component,Cmp1076Component,Cmp1077Component,Cmp1078Component,Cmp1079Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod7 {}

        