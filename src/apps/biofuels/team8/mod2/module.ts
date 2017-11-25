
import {Component, NgModule} from '@angular/core';
import {Cmp1820Component} from './cmp0/cmp';
import {Cmp1821Component} from './cmp1/cmp';
import {Cmp1822Component} from './cmp2/cmp';
import {Cmp1823Component} from './cmp3/cmp';
import {Cmp1824Component} from './cmp4/cmp';
import {Cmp1825Component} from './cmp5/cmp';
import {Cmp1826Component} from './cmp6/cmp';
import {Cmp1827Component} from './cmp7/cmp';
import {Cmp1828Component} from './cmp8/cmp';
import {Cmp1829Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod2',
  template: '<div>team8: <cmp-1820></cmp-1820><cmp-1821></cmp-1821><cmp-1822></cmp-1822><cmp-1823></cmp-1823><cmp-1824></cmp-1824><cmp-1825></cmp-1825><cmp-1826></cmp-1826><cmp-1827></cmp-1827><cmp-1828></cmp-1828><cmp-1829></cmp-1829></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1820Component,Cmp1821Component,Cmp1822Component,Cmp1823Component,Cmp1824Component,Cmp1825Component,Cmp1826Component,Cmp1827Component,Cmp1828Component,Cmp1829Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod2 {}

        