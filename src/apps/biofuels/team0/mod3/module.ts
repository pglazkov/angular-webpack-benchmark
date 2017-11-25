
import {Component, NgModule} from '@angular/core';
import {Cmp1030Component} from './cmp0/cmp';
import {Cmp1031Component} from './cmp1/cmp';
import {Cmp1032Component} from './cmp2/cmp';
import {Cmp1033Component} from './cmp3/cmp';
import {Cmp1034Component} from './cmp4/cmp';
import {Cmp1035Component} from './cmp5/cmp';
import {Cmp1036Component} from './cmp6/cmp';
import {Cmp1037Component} from './cmp7/cmp';
import {Cmp1038Component} from './cmp8/cmp';
import {Cmp1039Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod3',
  template: '<div>team0: <cmp-1030></cmp-1030><cmp-1031></cmp-1031><cmp-1032></cmp-1032><cmp-1033></cmp-1033><cmp-1034></cmp-1034><cmp-1035></cmp-1035><cmp-1036></cmp-1036><cmp-1037></cmp-1037><cmp-1038></cmp-1038><cmp-1039></cmp-1039></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1030Component,Cmp1031Component,Cmp1032Component,Cmp1033Component,Cmp1034Component,Cmp1035Component,Cmp1036Component,Cmp1037Component,Cmp1038Component,Cmp1039Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod3 {}

        