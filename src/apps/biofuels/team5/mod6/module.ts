
import {Component, NgModule} from '@angular/core';
import {Cmp1560Component} from './cmp0/cmp';
import {Cmp1561Component} from './cmp1/cmp';
import {Cmp1562Component} from './cmp2/cmp';
import {Cmp1563Component} from './cmp3/cmp';
import {Cmp1564Component} from './cmp4/cmp';
import {Cmp1565Component} from './cmp5/cmp';
import {Cmp1566Component} from './cmp6/cmp';
import {Cmp1567Component} from './cmp7/cmp';
import {Cmp1568Component} from './cmp8/cmp';
import {Cmp1569Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod6',
  template: '<div>team5: <cmp-1560></cmp-1560><cmp-1561></cmp-1561><cmp-1562></cmp-1562><cmp-1563></cmp-1563><cmp-1564></cmp-1564><cmp-1565></cmp-1565><cmp-1566></cmp-1566><cmp-1567></cmp-1567><cmp-1568></cmp-1568><cmp-1569></cmp-1569></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1560Component,Cmp1561Component,Cmp1562Component,Cmp1563Component,Cmp1564Component,Cmp1565Component,Cmp1566Component,Cmp1567Component,Cmp1568Component,Cmp1569Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod6 {}

        