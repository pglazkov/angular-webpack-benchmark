
import {Component, NgModule} from '@angular/core';
import {Cmp1710Component} from './cmp0/cmp';
import {Cmp1711Component} from './cmp1/cmp';
import {Cmp1712Component} from './cmp2/cmp';
import {Cmp1713Component} from './cmp3/cmp';
import {Cmp1714Component} from './cmp4/cmp';
import {Cmp1715Component} from './cmp5/cmp';
import {Cmp1716Component} from './cmp6/cmp';
import {Cmp1717Component} from './cmp7/cmp';
import {Cmp1718Component} from './cmp8/cmp';
import {Cmp1719Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod1',
  template: '<div>team7: <cmp-1710></cmp-1710><cmp-1711></cmp-1711><cmp-1712></cmp-1712><cmp-1713></cmp-1713><cmp-1714></cmp-1714><cmp-1715></cmp-1715><cmp-1716></cmp-1716><cmp-1717></cmp-1717><cmp-1718></cmp-1718><cmp-1719></cmp-1719></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1710Component,Cmp1711Component,Cmp1712Component,Cmp1713Component,Cmp1714Component,Cmp1715Component,Cmp1716Component,Cmp1717Component,Cmp1718Component,Cmp1719Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod1 {}

        