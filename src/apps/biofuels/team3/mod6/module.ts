
import {Component, NgModule} from '@angular/core';
import {Cmp1360Component} from './cmp0/cmp';
import {Cmp1361Component} from './cmp1/cmp';
import {Cmp1362Component} from './cmp2/cmp';
import {Cmp1363Component} from './cmp3/cmp';
import {Cmp1364Component} from './cmp4/cmp';
import {Cmp1365Component} from './cmp5/cmp';
import {Cmp1366Component} from './cmp6/cmp';
import {Cmp1367Component} from './cmp7/cmp';
import {Cmp1368Component} from './cmp8/cmp';
import {Cmp1369Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod6',
  template: '<div>team3: <cmp-1360></cmp-1360><cmp-1361></cmp-1361><cmp-1362></cmp-1362><cmp-1363></cmp-1363><cmp-1364></cmp-1364><cmp-1365></cmp-1365><cmp-1366></cmp-1366><cmp-1367></cmp-1367><cmp-1368></cmp-1368><cmp-1369></cmp-1369></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1360Component,Cmp1361Component,Cmp1362Component,Cmp1363Component,Cmp1364Component,Cmp1365Component,Cmp1366Component,Cmp1367Component,Cmp1368Component,Cmp1369Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod6 {}

        