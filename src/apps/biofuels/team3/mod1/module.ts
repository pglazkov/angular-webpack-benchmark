
import {Component, NgModule} from '@angular/core';
import {Cmp1310Component} from './cmp0/cmp';
import {Cmp1311Component} from './cmp1/cmp';
import {Cmp1312Component} from './cmp2/cmp';
import {Cmp1313Component} from './cmp3/cmp';
import {Cmp1314Component} from './cmp4/cmp';
import {Cmp1315Component} from './cmp5/cmp';
import {Cmp1316Component} from './cmp6/cmp';
import {Cmp1317Component} from './cmp7/cmp';
import {Cmp1318Component} from './cmp8/cmp';
import {Cmp1319Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod1',
  template: '<div>team3: <cmp-1310></cmp-1310><cmp-1311></cmp-1311><cmp-1312></cmp-1312><cmp-1313></cmp-1313><cmp-1314></cmp-1314><cmp-1315></cmp-1315><cmp-1316></cmp-1316><cmp-1317></cmp-1317><cmp-1318></cmp-1318><cmp-1319></cmp-1319></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1310Component,Cmp1311Component,Cmp1312Component,Cmp1313Component,Cmp1314Component,Cmp1315Component,Cmp1316Component,Cmp1317Component,Cmp1318Component,Cmp1319Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod1 {}

        