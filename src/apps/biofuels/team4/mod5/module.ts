
import {Component, NgModule} from '@angular/core';
import {Cmp1450Component} from './cmp0/cmp';
import {Cmp1451Component} from './cmp1/cmp';
import {Cmp1452Component} from './cmp2/cmp';
import {Cmp1453Component} from './cmp3/cmp';
import {Cmp1454Component} from './cmp4/cmp';
import {Cmp1455Component} from './cmp5/cmp';
import {Cmp1456Component} from './cmp6/cmp';
import {Cmp1457Component} from './cmp7/cmp';
import {Cmp1458Component} from './cmp8/cmp';
import {Cmp1459Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod5',
  template: '<div>team4: <cmp-1450></cmp-1450><cmp-1451></cmp-1451><cmp-1452></cmp-1452><cmp-1453></cmp-1453><cmp-1454></cmp-1454><cmp-1455></cmp-1455><cmp-1456></cmp-1456><cmp-1457></cmp-1457><cmp-1458></cmp-1458><cmp-1459></cmp-1459></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1450Component,Cmp1451Component,Cmp1452Component,Cmp1453Component,Cmp1454Component,Cmp1455Component,Cmp1456Component,Cmp1457Component,Cmp1458Component,Cmp1459Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod5 {}

        