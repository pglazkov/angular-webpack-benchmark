
import {Component, NgModule} from '@angular/core';
import {Cmp1320Component} from './cmp0/cmp';
import {Cmp1321Component} from './cmp1/cmp';
import {Cmp1322Component} from './cmp2/cmp';
import {Cmp1323Component} from './cmp3/cmp';
import {Cmp1324Component} from './cmp4/cmp';
import {Cmp1325Component} from './cmp5/cmp';
import {Cmp1326Component} from './cmp6/cmp';
import {Cmp1327Component} from './cmp7/cmp';
import {Cmp1328Component} from './cmp8/cmp';
import {Cmp1329Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod2',
  template: '<div>team3: <cmp-1320></cmp-1320><cmp-1321></cmp-1321><cmp-1322></cmp-1322><cmp-1323></cmp-1323><cmp-1324></cmp-1324><cmp-1325></cmp-1325><cmp-1326></cmp-1326><cmp-1327></cmp-1327><cmp-1328></cmp-1328><cmp-1329></cmp-1329></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1320Component,Cmp1321Component,Cmp1322Component,Cmp1323Component,Cmp1324Component,Cmp1325Component,Cmp1326Component,Cmp1327Component,Cmp1328Component,Cmp1329Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod2 {}

        