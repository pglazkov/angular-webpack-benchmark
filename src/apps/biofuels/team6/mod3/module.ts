
import {Component, NgModule} from '@angular/core';
import {Cmp1630Component} from './cmp0/cmp';
import {Cmp1631Component} from './cmp1/cmp';
import {Cmp1632Component} from './cmp2/cmp';
import {Cmp1633Component} from './cmp3/cmp';
import {Cmp1634Component} from './cmp4/cmp';
import {Cmp1635Component} from './cmp5/cmp';
import {Cmp1636Component} from './cmp6/cmp';
import {Cmp1637Component} from './cmp7/cmp';
import {Cmp1638Component} from './cmp8/cmp';
import {Cmp1639Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod3',
  template: '<div>team6: <cmp-1630></cmp-1630><cmp-1631></cmp-1631><cmp-1632></cmp-1632><cmp-1633></cmp-1633><cmp-1634></cmp-1634><cmp-1635></cmp-1635><cmp-1636></cmp-1636><cmp-1637></cmp-1637><cmp-1638></cmp-1638><cmp-1639></cmp-1639></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1630Component,Cmp1631Component,Cmp1632Component,Cmp1633Component,Cmp1634Component,Cmp1635Component,Cmp1636Component,Cmp1637Component,Cmp1638Component,Cmp1639Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod3 {}

        