
import {Component, NgModule} from '@angular/core';
import {Cmp1600Component} from './cmp0/cmp';
import {Cmp1601Component} from './cmp1/cmp';
import {Cmp1602Component} from './cmp2/cmp';
import {Cmp1603Component} from './cmp3/cmp';
import {Cmp1604Component} from './cmp4/cmp';
import {Cmp1605Component} from './cmp5/cmp';
import {Cmp1606Component} from './cmp6/cmp';
import {Cmp1607Component} from './cmp7/cmp';
import {Cmp1608Component} from './cmp8/cmp';
import {Cmp1609Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod0',
  template: '<div>team6: <cmp-1600></cmp-1600><cmp-1601></cmp-1601><cmp-1602></cmp-1602><cmp-1603></cmp-1603><cmp-1604></cmp-1604><cmp-1605></cmp-1605><cmp-1606></cmp-1606><cmp-1607></cmp-1607><cmp-1608></cmp-1608><cmp-1609></cmp-1609></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1600Component,Cmp1601Component,Cmp1602Component,Cmp1603Component,Cmp1604Component,Cmp1605Component,Cmp1606Component,Cmp1607Component,Cmp1608Component,Cmp1609Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod0 {}

        