
import {Component, NgModule} from '@angular/core';
import {Cmp1050Component} from './cmp0/cmp';
import {Cmp1051Component} from './cmp1/cmp';
import {Cmp1052Component} from './cmp2/cmp';
import {Cmp1053Component} from './cmp3/cmp';
import {Cmp1054Component} from './cmp4/cmp';
import {Cmp1055Component} from './cmp5/cmp';
import {Cmp1056Component} from './cmp6/cmp';
import {Cmp1057Component} from './cmp7/cmp';
import {Cmp1058Component} from './cmp8/cmp';
import {Cmp1059Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod5',
  template: '<div>team0: <cmp-1050></cmp-1050><cmp-1051></cmp-1051><cmp-1052></cmp-1052><cmp-1053></cmp-1053><cmp-1054></cmp-1054><cmp-1055></cmp-1055><cmp-1056></cmp-1056><cmp-1057></cmp-1057><cmp-1058></cmp-1058><cmp-1059></cmp-1059></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1050Component,Cmp1051Component,Cmp1052Component,Cmp1053Component,Cmp1054Component,Cmp1055Component,Cmp1056Component,Cmp1057Component,Cmp1058Component,Cmp1059Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod5 {}

        