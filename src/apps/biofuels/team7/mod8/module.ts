
import {Component, NgModule} from '@angular/core';
import {Cmp1780Component} from './cmp0/cmp';
import {Cmp1781Component} from './cmp1/cmp';
import {Cmp1782Component} from './cmp2/cmp';
import {Cmp1783Component} from './cmp3/cmp';
import {Cmp1784Component} from './cmp4/cmp';
import {Cmp1785Component} from './cmp5/cmp';
import {Cmp1786Component} from './cmp6/cmp';
import {Cmp1787Component} from './cmp7/cmp';
import {Cmp1788Component} from './cmp8/cmp';
import {Cmp1789Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod8',
  template: '<div>team7: <cmp-1780></cmp-1780><cmp-1781></cmp-1781><cmp-1782></cmp-1782><cmp-1783></cmp-1783><cmp-1784></cmp-1784><cmp-1785></cmp-1785><cmp-1786></cmp-1786><cmp-1787></cmp-1787><cmp-1788></cmp-1788><cmp-1789></cmp-1789></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1780Component,Cmp1781Component,Cmp1782Component,Cmp1783Component,Cmp1784Component,Cmp1785Component,Cmp1786Component,Cmp1787Component,Cmp1788Component,Cmp1789Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod8 {}

        