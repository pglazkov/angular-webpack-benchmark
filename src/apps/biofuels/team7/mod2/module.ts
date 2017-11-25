
import {Component, NgModule} from '@angular/core';
import {Cmp1720Component} from './cmp0/cmp';
import {Cmp1721Component} from './cmp1/cmp';
import {Cmp1722Component} from './cmp2/cmp';
import {Cmp1723Component} from './cmp3/cmp';
import {Cmp1724Component} from './cmp4/cmp';
import {Cmp1725Component} from './cmp5/cmp';
import {Cmp1726Component} from './cmp6/cmp';
import {Cmp1727Component} from './cmp7/cmp';
import {Cmp1728Component} from './cmp8/cmp';
import {Cmp1729Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod2',
  template: '<div>team7: <cmp-1720></cmp-1720><cmp-1721></cmp-1721><cmp-1722></cmp-1722><cmp-1723></cmp-1723><cmp-1724></cmp-1724><cmp-1725></cmp-1725><cmp-1726></cmp-1726><cmp-1727></cmp-1727><cmp-1728></cmp-1728><cmp-1729></cmp-1729></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1720Component,Cmp1721Component,Cmp1722Component,Cmp1723Component,Cmp1724Component,Cmp1725Component,Cmp1726Component,Cmp1727Component,Cmp1728Component,Cmp1729Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod2 {}

        