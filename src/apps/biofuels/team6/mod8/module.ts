
import {Component, NgModule} from '@angular/core';
import {Cmp1680Component} from './cmp0/cmp';
import {Cmp1681Component} from './cmp1/cmp';
import {Cmp1682Component} from './cmp2/cmp';
import {Cmp1683Component} from './cmp3/cmp';
import {Cmp1684Component} from './cmp4/cmp';
import {Cmp1685Component} from './cmp5/cmp';
import {Cmp1686Component} from './cmp6/cmp';
import {Cmp1687Component} from './cmp7/cmp';
import {Cmp1688Component} from './cmp8/cmp';
import {Cmp1689Component} from './cmp9/cmp';
@Component({
  selector: 'team6-mod8',
  template: '<div>team6: <cmp-1680></cmp-1680><cmp-1681></cmp-1681><cmp-1682></cmp-1682><cmp-1683></cmp-1683><cmp-1684></cmp-1684><cmp-1685></cmp-1685><cmp-1686></cmp-1686><cmp-1687></cmp-1687><cmp-1688></cmp-1688><cmp-1689></cmp-1689></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1680Component,Cmp1681Component,Cmp1682Component,Cmp1683Component,Cmp1684Component,Cmp1685Component,Cmp1686Component,Cmp1687Component,Cmp1688Component,Cmp1689Component],
  exports: [Comp],
})
export class Module_biofuels_team6_mod8 {}

        