
import {Component, NgModule} from '@angular/core';
import {Cmp1660Component} from './cmp0/cmp';
import {Cmp1661Component} from './cmp1/cmp';
import {Cmp1662Component} from './cmp2/cmp';
import {Cmp1663Component} from './cmp3/cmp';
import {Cmp1664Component} from './cmp4/cmp';
import {Cmp1665Component} from './cmp5/cmp';
import {Cmp1666Component} from './cmp6/cmp';
import {Cmp1667Component} from './cmp7/cmp';
import {Cmp1668Component} from './cmp8/cmp';
import {Cmp1669Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod6',
  template: '<div>team6: <cmp-1660></cmp-1660><cmp-1661></cmp-1661><cmp-1662></cmp-1662><cmp-1663></cmp-1663><cmp-1664></cmp-1664><cmp-1665></cmp-1665><cmp-1666></cmp-1666><cmp-1667></cmp-1667><cmp-1668></cmp-1668><cmp-1669></cmp-1669></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1660Component,Cmp1661Component,Cmp1662Component,Cmp1663Component,Cmp1664Component,Cmp1665Component,Cmp1666Component,Cmp1667Component,Cmp1668Component,Cmp1669Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod6 {}

        