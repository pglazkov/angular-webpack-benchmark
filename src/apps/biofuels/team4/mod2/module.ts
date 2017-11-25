
import {Component, NgModule} from '@angular/core';
import {Cmp1420Component} from './cmp0/cmp';
import {Cmp1421Component} from './cmp1/cmp';
import {Cmp1422Component} from './cmp2/cmp';
import {Cmp1423Component} from './cmp3/cmp';
import {Cmp1424Component} from './cmp4/cmp';
import {Cmp1425Component} from './cmp5/cmp';
import {Cmp1426Component} from './cmp6/cmp';
import {Cmp1427Component} from './cmp7/cmp';
import {Cmp1428Component} from './cmp8/cmp';
import {Cmp1429Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod2',
  template: '<div>team4: <cmp-1420></cmp-1420><cmp-1421></cmp-1421><cmp-1422></cmp-1422><cmp-1423></cmp-1423><cmp-1424></cmp-1424><cmp-1425></cmp-1425><cmp-1426></cmp-1426><cmp-1427></cmp-1427><cmp-1428></cmp-1428><cmp-1429></cmp-1429></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1420Component,Cmp1421Component,Cmp1422Component,Cmp1423Component,Cmp1424Component,Cmp1425Component,Cmp1426Component,Cmp1427Component,Cmp1428Component,Cmp1429Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod2 {}

        