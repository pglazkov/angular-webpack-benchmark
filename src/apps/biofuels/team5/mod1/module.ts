
import {Component, NgModule} from '@angular/core';
import {Cmp1510Component} from './cmp0/cmp';
import {Cmp1511Component} from './cmp1/cmp';
import {Cmp1512Component} from './cmp2/cmp';
import {Cmp1513Component} from './cmp3/cmp';
import {Cmp1514Component} from './cmp4/cmp';
import {Cmp1515Component} from './cmp5/cmp';
import {Cmp1516Component} from './cmp6/cmp';
import {Cmp1517Component} from './cmp7/cmp';
import {Cmp1518Component} from './cmp8/cmp';
import {Cmp1519Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod1',
  template: '<div>team5: <cmp-1510></cmp-1510><cmp-1511></cmp-1511><cmp-1512></cmp-1512><cmp-1513></cmp-1513><cmp-1514></cmp-1514><cmp-1515></cmp-1515><cmp-1516></cmp-1516><cmp-1517></cmp-1517><cmp-1518></cmp-1518><cmp-1519></cmp-1519></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1510Component,Cmp1511Component,Cmp1512Component,Cmp1513Component,Cmp1514Component,Cmp1515Component,Cmp1516Component,Cmp1517Component,Cmp1518Component,Cmp1519Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod1 {}

        