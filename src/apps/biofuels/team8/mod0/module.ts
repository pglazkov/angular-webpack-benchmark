
import {Component, NgModule} from '@angular/core';
import {Cmp1800Component} from './cmp0/cmp';
import {Cmp1801Component} from './cmp1/cmp';
import {Cmp1802Component} from './cmp2/cmp';
import {Cmp1803Component} from './cmp3/cmp';
import {Cmp1804Component} from './cmp4/cmp';
import {Cmp1805Component} from './cmp5/cmp';
import {Cmp1806Component} from './cmp6/cmp';
import {Cmp1807Component} from './cmp7/cmp';
import {Cmp1808Component} from './cmp8/cmp';
import {Cmp1809Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod0',
  template: '<div>team8: <cmp-1800></cmp-1800><cmp-1801></cmp-1801><cmp-1802></cmp-1802><cmp-1803></cmp-1803><cmp-1804></cmp-1804><cmp-1805></cmp-1805><cmp-1806></cmp-1806><cmp-1807></cmp-1807><cmp-1808></cmp-1808><cmp-1809></cmp-1809></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1800Component,Cmp1801Component,Cmp1802Component,Cmp1803Component,Cmp1804Component,Cmp1805Component,Cmp1806Component,Cmp1807Component,Cmp1808Component,Cmp1809Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod0 {}

        