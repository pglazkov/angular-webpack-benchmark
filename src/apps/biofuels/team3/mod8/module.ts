
import {Component, NgModule} from '@angular/core';
import {Cmp1380Component} from './cmp0/cmp';
import {Cmp1381Component} from './cmp1/cmp';
import {Cmp1382Component} from './cmp2/cmp';
import {Cmp1383Component} from './cmp3/cmp';
import {Cmp1384Component} from './cmp4/cmp';
import {Cmp1385Component} from './cmp5/cmp';
import {Cmp1386Component} from './cmp6/cmp';
import {Cmp1387Component} from './cmp7/cmp';
import {Cmp1388Component} from './cmp8/cmp';
import {Cmp1389Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod8',
  template: '<div>team3: <cmp-1380></cmp-1380><cmp-1381></cmp-1381><cmp-1382></cmp-1382><cmp-1383></cmp-1383><cmp-1384></cmp-1384><cmp-1385></cmp-1385><cmp-1386></cmp-1386><cmp-1387></cmp-1387><cmp-1388></cmp-1388><cmp-1389></cmp-1389></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1380Component,Cmp1381Component,Cmp1382Component,Cmp1383Component,Cmp1384Component,Cmp1385Component,Cmp1386Component,Cmp1387Component,Cmp1388Component,Cmp1389Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod8 {}

        