
import {Component, NgModule} from '@angular/core';
import {Cmp1370Component} from './cmp0/cmp';
import {Cmp1371Component} from './cmp1/cmp';
import {Cmp1372Component} from './cmp2/cmp';
import {Cmp1373Component} from './cmp3/cmp';
import {Cmp1374Component} from './cmp4/cmp';
import {Cmp1375Component} from './cmp5/cmp';
import {Cmp1376Component} from './cmp6/cmp';
import {Cmp1377Component} from './cmp7/cmp';
import {Cmp1378Component} from './cmp8/cmp';
import {Cmp1379Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod7',
  template: '<div>team3: <cmp-1370></cmp-1370><cmp-1371></cmp-1371><cmp-1372></cmp-1372><cmp-1373></cmp-1373><cmp-1374></cmp-1374><cmp-1375></cmp-1375><cmp-1376></cmp-1376><cmp-1377></cmp-1377><cmp-1378></cmp-1378><cmp-1379></cmp-1379></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1370Component,Cmp1371Component,Cmp1372Component,Cmp1373Component,Cmp1374Component,Cmp1375Component,Cmp1376Component,Cmp1377Component,Cmp1378Component,Cmp1379Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod7 {}

        