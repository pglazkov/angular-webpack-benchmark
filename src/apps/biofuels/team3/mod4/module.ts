
import {Component, NgModule} from '@angular/core';
import {Cmp1340Component} from './cmp0/cmp';
import {Cmp1341Component} from './cmp1/cmp';
import {Cmp1342Component} from './cmp2/cmp';
import {Cmp1343Component} from './cmp3/cmp';
import {Cmp1344Component} from './cmp4/cmp';
import {Cmp1345Component} from './cmp5/cmp';
import {Cmp1346Component} from './cmp6/cmp';
import {Cmp1347Component} from './cmp7/cmp';
import {Cmp1348Component} from './cmp8/cmp';
import {Cmp1349Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod4',
  template: '<div>team3: <cmp-1340></cmp-1340><cmp-1341></cmp-1341><cmp-1342></cmp-1342><cmp-1343></cmp-1343><cmp-1344></cmp-1344><cmp-1345></cmp-1345><cmp-1346></cmp-1346><cmp-1347></cmp-1347><cmp-1348></cmp-1348><cmp-1349></cmp-1349></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1340Component,Cmp1341Component,Cmp1342Component,Cmp1343Component,Cmp1344Component,Cmp1345Component,Cmp1346Component,Cmp1347Component,Cmp1348Component,Cmp1349Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod4 {}

        