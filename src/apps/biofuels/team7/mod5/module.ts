
import {Component, NgModule} from '@angular/core';
import {Cmp1750Component} from './cmp0/cmp';
import {Cmp1751Component} from './cmp1/cmp';
import {Cmp1752Component} from './cmp2/cmp';
import {Cmp1753Component} from './cmp3/cmp';
import {Cmp1754Component} from './cmp4/cmp';
import {Cmp1755Component} from './cmp5/cmp';
import {Cmp1756Component} from './cmp6/cmp';
import {Cmp1757Component} from './cmp7/cmp';
import {Cmp1758Component} from './cmp8/cmp';
import {Cmp1759Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod5',
  template: '<div>team7: <cmp-1750></cmp-1750><cmp-1751></cmp-1751><cmp-1752></cmp-1752><cmp-1753></cmp-1753><cmp-1754></cmp-1754><cmp-1755></cmp-1755><cmp-1756></cmp-1756><cmp-1757></cmp-1757><cmp-1758></cmp-1758><cmp-1759></cmp-1759></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1750Component,Cmp1751Component,Cmp1752Component,Cmp1753Component,Cmp1754Component,Cmp1755Component,Cmp1756Component,Cmp1757Component,Cmp1758Component,Cmp1759Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod5 {}

        