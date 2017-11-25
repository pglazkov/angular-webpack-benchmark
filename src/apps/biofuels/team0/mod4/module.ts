
import {Component, NgModule} from '@angular/core';
import {Cmp1040Component} from './cmp0/cmp';
import {Cmp1041Component} from './cmp1/cmp';
import {Cmp1042Component} from './cmp2/cmp';
import {Cmp1043Component} from './cmp3/cmp';
import {Cmp1044Component} from './cmp4/cmp';
import {Cmp1045Component} from './cmp5/cmp';
import {Cmp1046Component} from './cmp6/cmp';
import {Cmp1047Component} from './cmp7/cmp';
import {Cmp1048Component} from './cmp8/cmp';
import {Cmp1049Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod4',
  template: '<div>team0: <cmp-1040></cmp-1040><cmp-1041></cmp-1041><cmp-1042></cmp-1042><cmp-1043></cmp-1043><cmp-1044></cmp-1044><cmp-1045></cmp-1045><cmp-1046></cmp-1046><cmp-1047></cmp-1047><cmp-1048></cmp-1048><cmp-1049></cmp-1049></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1040Component,Cmp1041Component,Cmp1042Component,Cmp1043Component,Cmp1044Component,Cmp1045Component,Cmp1046Component,Cmp1047Component,Cmp1048Component,Cmp1049Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod4 {}

        