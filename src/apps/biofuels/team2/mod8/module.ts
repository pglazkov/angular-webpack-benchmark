
import {Component, NgModule} from '@angular/core';
import {Cmp1280Component} from './cmp0/cmp';
import {Cmp1281Component} from './cmp1/cmp';
import {Cmp1282Component} from './cmp2/cmp';
import {Cmp1283Component} from './cmp3/cmp';
import {Cmp1284Component} from './cmp4/cmp';
import {Cmp1285Component} from './cmp5/cmp';
import {Cmp1286Component} from './cmp6/cmp';
import {Cmp1287Component} from './cmp7/cmp';
import {Cmp1288Component} from './cmp8/cmp';
import {Cmp1289Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod8',
  template: '<div>team2: <cmp-1280></cmp-1280><cmp-1281></cmp-1281><cmp-1282></cmp-1282><cmp-1283></cmp-1283><cmp-1284></cmp-1284><cmp-1285></cmp-1285><cmp-1286></cmp-1286><cmp-1287></cmp-1287><cmp-1288></cmp-1288><cmp-1289></cmp-1289></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1280Component,Cmp1281Component,Cmp1282Component,Cmp1283Component,Cmp1284Component,Cmp1285Component,Cmp1286Component,Cmp1287Component,Cmp1288Component,Cmp1289Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod8 {}

        