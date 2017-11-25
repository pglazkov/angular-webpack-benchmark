
import {Component, NgModule} from '@angular/core';
import {Cmp1730Component} from './cmp0/cmp';
import {Cmp1731Component} from './cmp1/cmp';
import {Cmp1732Component} from './cmp2/cmp';
import {Cmp1733Component} from './cmp3/cmp';
import {Cmp1734Component} from './cmp4/cmp';
import {Cmp1735Component} from './cmp5/cmp';
import {Cmp1736Component} from './cmp6/cmp';
import {Cmp1737Component} from './cmp7/cmp';
import {Cmp1738Component} from './cmp8/cmp';
import {Cmp1739Component} from './cmp9/cmp';
@Component({
  selector: 'team7-mod3',
  template: '<div>team7: <cmp-1730></cmp-1730><cmp-1731></cmp-1731><cmp-1732></cmp-1732><cmp-1733></cmp-1733><cmp-1734></cmp-1734><cmp-1735></cmp-1735><cmp-1736></cmp-1736><cmp-1737></cmp-1737><cmp-1738></cmp-1738><cmp-1739></cmp-1739></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1730Component,Cmp1731Component,Cmp1732Component,Cmp1733Component,Cmp1734Component,Cmp1735Component,Cmp1736Component,Cmp1737Component,Cmp1738Component,Cmp1739Component],
  exports: [Comp],
})
export class Module_biofuels_team7_mod3 {}

        