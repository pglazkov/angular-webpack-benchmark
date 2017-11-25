
import {Component, NgModule} from '@angular/core';
import {Cmp1570Component} from './cmp0/cmp';
import {Cmp1571Component} from './cmp1/cmp';
import {Cmp1572Component} from './cmp2/cmp';
import {Cmp1573Component} from './cmp3/cmp';
import {Cmp1574Component} from './cmp4/cmp';
import {Cmp1575Component} from './cmp5/cmp';
import {Cmp1576Component} from './cmp6/cmp';
import {Cmp1577Component} from './cmp7/cmp';
import {Cmp1578Component} from './cmp8/cmp';
import {Cmp1579Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod7',
  template: '<div>team5: <cmp-1570></cmp-1570><cmp-1571></cmp-1571><cmp-1572></cmp-1572><cmp-1573></cmp-1573><cmp-1574></cmp-1574><cmp-1575></cmp-1575><cmp-1576></cmp-1576><cmp-1577></cmp-1577><cmp-1578></cmp-1578><cmp-1579></cmp-1579></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1570Component,Cmp1571Component,Cmp1572Component,Cmp1573Component,Cmp1574Component,Cmp1575Component,Cmp1576Component,Cmp1577Component,Cmp1578Component,Cmp1579Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod7 {}

        