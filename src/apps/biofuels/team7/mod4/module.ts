
import {Component, NgModule} from '@angular/core';
import {Cmp1740Component} from './cmp0/cmp';
import {Cmp1741Component} from './cmp1/cmp';
import {Cmp1742Component} from './cmp2/cmp';
import {Cmp1743Component} from './cmp3/cmp';
import {Cmp1744Component} from './cmp4/cmp';
import {Cmp1745Component} from './cmp5/cmp';
import {Cmp1746Component} from './cmp6/cmp';
import {Cmp1747Component} from './cmp7/cmp';
import {Cmp1748Component} from './cmp8/cmp';
import {Cmp1749Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod4',
  template: '<div>team7: <cmp-1740></cmp-1740><cmp-1741></cmp-1741><cmp-1742></cmp-1742><cmp-1743></cmp-1743><cmp-1744></cmp-1744><cmp-1745></cmp-1745><cmp-1746></cmp-1746><cmp-1747></cmp-1747><cmp-1748></cmp-1748><cmp-1749></cmp-1749></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1740Component,Cmp1741Component,Cmp1742Component,Cmp1743Component,Cmp1744Component,Cmp1745Component,Cmp1746Component,Cmp1747Component,Cmp1748Component,Cmp1749Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod4 {}

        