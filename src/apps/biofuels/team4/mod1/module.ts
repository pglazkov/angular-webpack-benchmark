
import {Component, NgModule} from '@angular/core';
import {Cmp1410Component} from './cmp0/cmp';
import {Cmp1411Component} from './cmp1/cmp';
import {Cmp1412Component} from './cmp2/cmp';
import {Cmp1413Component} from './cmp3/cmp';
import {Cmp1414Component} from './cmp4/cmp';
import {Cmp1415Component} from './cmp5/cmp';
import {Cmp1416Component} from './cmp6/cmp';
import {Cmp1417Component} from './cmp7/cmp';
import {Cmp1418Component} from './cmp8/cmp';
import {Cmp1419Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod1',
  template: '<div>team4: <cmp-1410></cmp-1410><cmp-1411></cmp-1411><cmp-1412></cmp-1412><cmp-1413></cmp-1413><cmp-1414></cmp-1414><cmp-1415></cmp-1415><cmp-1416></cmp-1416><cmp-1417></cmp-1417><cmp-1418></cmp-1418><cmp-1419></cmp-1419></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1410Component,Cmp1411Component,Cmp1412Component,Cmp1413Component,Cmp1414Component,Cmp1415Component,Cmp1416Component,Cmp1417Component,Cmp1418Component,Cmp1419Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod1 {}

        