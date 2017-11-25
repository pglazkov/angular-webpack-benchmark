
import {Component, NgModule} from '@angular/core';
import {Cmp1330Component} from './cmp0/cmp';
import {Cmp1331Component} from './cmp1/cmp';
import {Cmp1332Component} from './cmp2/cmp';
import {Cmp1333Component} from './cmp3/cmp';
import {Cmp1334Component} from './cmp4/cmp';
import {Cmp1335Component} from './cmp5/cmp';
import {Cmp1336Component} from './cmp6/cmp';
import {Cmp1337Component} from './cmp7/cmp';
import {Cmp1338Component} from './cmp8/cmp';
import {Cmp1339Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod3',
  template: '<div>team3: <cmp-1330></cmp-1330><cmp-1331></cmp-1331><cmp-1332></cmp-1332><cmp-1333></cmp-1333><cmp-1334></cmp-1334><cmp-1335></cmp-1335><cmp-1336></cmp-1336><cmp-1337></cmp-1337><cmp-1338></cmp-1338><cmp-1339></cmp-1339></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1330Component,Cmp1331Component,Cmp1332Component,Cmp1333Component,Cmp1334Component,Cmp1335Component,Cmp1336Component,Cmp1337Component,Cmp1338Component,Cmp1339Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod3 {}

        