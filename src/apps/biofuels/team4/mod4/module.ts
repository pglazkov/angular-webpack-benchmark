
import {Component, NgModule} from '@angular/core';
import {Cmp1440Component} from './cmp0/cmp';
import {Cmp1441Component} from './cmp1/cmp';
import {Cmp1442Component} from './cmp2/cmp';
import {Cmp1443Component} from './cmp3/cmp';
import {Cmp1444Component} from './cmp4/cmp';
import {Cmp1445Component} from './cmp5/cmp';
import {Cmp1446Component} from './cmp6/cmp';
import {Cmp1447Component} from './cmp7/cmp';
import {Cmp1448Component} from './cmp8/cmp';
import {Cmp1449Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod4',
  template: '<div>team4: <cmp-1440></cmp-1440><cmp-1441></cmp-1441><cmp-1442></cmp-1442><cmp-1443></cmp-1443><cmp-1444></cmp-1444><cmp-1445></cmp-1445><cmp-1446></cmp-1446><cmp-1447></cmp-1447><cmp-1448></cmp-1448><cmp-1449></cmp-1449></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1440Component,Cmp1441Component,Cmp1442Component,Cmp1443Component,Cmp1444Component,Cmp1445Component,Cmp1446Component,Cmp1447Component,Cmp1448Component,Cmp1449Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod4 {}

        