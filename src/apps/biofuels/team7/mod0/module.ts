
import {Component, NgModule} from '@angular/core';
import {Cmp1700Component} from './cmp0/cmp';
import {Cmp1701Component} from './cmp1/cmp';
import {Cmp1702Component} from './cmp2/cmp';
import {Cmp1703Component} from './cmp3/cmp';
import {Cmp1704Component} from './cmp4/cmp';
import {Cmp1705Component} from './cmp5/cmp';
import {Cmp1706Component} from './cmp6/cmp';
import {Cmp1707Component} from './cmp7/cmp';
import {Cmp1708Component} from './cmp8/cmp';
import {Cmp1709Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod0',
  template: '<div>team7: <cmp-1700></cmp-1700><cmp-1701></cmp-1701><cmp-1702></cmp-1702><cmp-1703></cmp-1703><cmp-1704></cmp-1704><cmp-1705></cmp-1705><cmp-1706></cmp-1706><cmp-1707></cmp-1707><cmp-1708></cmp-1708><cmp-1709></cmp-1709></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1700Component,Cmp1701Component,Cmp1702Component,Cmp1703Component,Cmp1704Component,Cmp1705Component,Cmp1706Component,Cmp1707Component,Cmp1708Component,Cmp1709Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod0 {}

        