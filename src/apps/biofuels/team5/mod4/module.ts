
import {Component, NgModule} from '@angular/core';
import {Cmp1540Component} from './cmp0/cmp';
import {Cmp1541Component} from './cmp1/cmp';
import {Cmp1542Component} from './cmp2/cmp';
import {Cmp1543Component} from './cmp3/cmp';
import {Cmp1544Component} from './cmp4/cmp';
import {Cmp1545Component} from './cmp5/cmp';
import {Cmp1546Component} from './cmp6/cmp';
import {Cmp1547Component} from './cmp7/cmp';
import {Cmp1548Component} from './cmp8/cmp';
import {Cmp1549Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod4',
  template: '<div>team5: <cmp-1540></cmp-1540><cmp-1541></cmp-1541><cmp-1542></cmp-1542><cmp-1543></cmp-1543><cmp-1544></cmp-1544><cmp-1545></cmp-1545><cmp-1546></cmp-1546><cmp-1547></cmp-1547><cmp-1548></cmp-1548><cmp-1549></cmp-1549></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1540Component,Cmp1541Component,Cmp1542Component,Cmp1543Component,Cmp1544Component,Cmp1545Component,Cmp1546Component,Cmp1547Component,Cmp1548Component,Cmp1549Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod4 {}

        