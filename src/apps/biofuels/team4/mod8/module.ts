
import {Component, NgModule} from '@angular/core';
import {Cmp1480Component} from './cmp0/cmp';
import {Cmp1481Component} from './cmp1/cmp';
import {Cmp1482Component} from './cmp2/cmp';
import {Cmp1483Component} from './cmp3/cmp';
import {Cmp1484Component} from './cmp4/cmp';
import {Cmp1485Component} from './cmp5/cmp';
import {Cmp1486Component} from './cmp6/cmp';
import {Cmp1487Component} from './cmp7/cmp';
import {Cmp1488Component} from './cmp8/cmp';
import {Cmp1489Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod8',
  template: '<div>team4: <cmp-1480></cmp-1480><cmp-1481></cmp-1481><cmp-1482></cmp-1482><cmp-1483></cmp-1483><cmp-1484></cmp-1484><cmp-1485></cmp-1485><cmp-1486></cmp-1486><cmp-1487></cmp-1487><cmp-1488></cmp-1488><cmp-1489></cmp-1489></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1480Component,Cmp1481Component,Cmp1482Component,Cmp1483Component,Cmp1484Component,Cmp1485Component,Cmp1486Component,Cmp1487Component,Cmp1488Component,Cmp1489Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod8 {}

        