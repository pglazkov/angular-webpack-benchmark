
import {Component, NgModule} from '@angular/core';
import {Cmp1170Component} from './cmp0/cmp';
import {Cmp1171Component} from './cmp1/cmp';
import {Cmp1172Component} from './cmp2/cmp';
import {Cmp1173Component} from './cmp3/cmp';
import {Cmp1174Component} from './cmp4/cmp';
import {Cmp1175Component} from './cmp5/cmp';
import {Cmp1176Component} from './cmp6/cmp';
import {Cmp1177Component} from './cmp7/cmp';
import {Cmp1178Component} from './cmp8/cmp';
import {Cmp1179Component} from './cmp9/cmp';
@Component({
  selector: 'team1-mod7',
  template: '<div>team1: <cmp-1170></cmp-1170><cmp-1171></cmp-1171><cmp-1172></cmp-1172><cmp-1173></cmp-1173><cmp-1174></cmp-1174><cmp-1175></cmp-1175><cmp-1176></cmp-1176><cmp-1177></cmp-1177><cmp-1178></cmp-1178><cmp-1179></cmp-1179></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1170Component,Cmp1171Component,Cmp1172Component,Cmp1173Component,Cmp1174Component,Cmp1175Component,Cmp1176Component,Cmp1177Component,Cmp1178Component,Cmp1179Component],
  exports: [Comp],
})
export class Module_biofuels_team1_mod7 {}

        