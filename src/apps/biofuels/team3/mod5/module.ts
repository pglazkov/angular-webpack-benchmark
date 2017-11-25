
import {Component, NgModule} from '@angular/core';
import {Cmp1350Component} from './cmp0/cmp';
import {Cmp1351Component} from './cmp1/cmp';
import {Cmp1352Component} from './cmp2/cmp';
import {Cmp1353Component} from './cmp3/cmp';
import {Cmp1354Component} from './cmp4/cmp';
import {Cmp1355Component} from './cmp5/cmp';
import {Cmp1356Component} from './cmp6/cmp';
import {Cmp1357Component} from './cmp7/cmp';
import {Cmp1358Component} from './cmp8/cmp';
import {Cmp1359Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod5',
  template: '<div>team3: <cmp-1350></cmp-1350><cmp-1351></cmp-1351><cmp-1352></cmp-1352><cmp-1353></cmp-1353><cmp-1354></cmp-1354><cmp-1355></cmp-1355><cmp-1356></cmp-1356><cmp-1357></cmp-1357><cmp-1358></cmp-1358><cmp-1359></cmp-1359></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1350Component,Cmp1351Component,Cmp1352Component,Cmp1353Component,Cmp1354Component,Cmp1355Component,Cmp1356Component,Cmp1357Component,Cmp1358Component,Cmp1359Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod5 {}

        