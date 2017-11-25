
import {Component, NgModule} from '@angular/core';
import {Cmp1390Component} from './cmp0/cmp';
import {Cmp1391Component} from './cmp1/cmp';
import {Cmp1392Component} from './cmp2/cmp';
import {Cmp1393Component} from './cmp3/cmp';
import {Cmp1394Component} from './cmp4/cmp';
import {Cmp1395Component} from './cmp5/cmp';
import {Cmp1396Component} from './cmp6/cmp';
import {Cmp1397Component} from './cmp7/cmp';
import {Cmp1398Component} from './cmp8/cmp';
import {Cmp1399Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod9',
  template: '<div>team3: <cmp-1390></cmp-1390><cmp-1391></cmp-1391><cmp-1392></cmp-1392><cmp-1393></cmp-1393><cmp-1394></cmp-1394><cmp-1395></cmp-1395><cmp-1396></cmp-1396><cmp-1397></cmp-1397><cmp-1398></cmp-1398><cmp-1399></cmp-1399></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1390Component,Cmp1391Component,Cmp1392Component,Cmp1393Component,Cmp1394Component,Cmp1395Component,Cmp1396Component,Cmp1397Component,Cmp1398Component,Cmp1399Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod9 {}

        