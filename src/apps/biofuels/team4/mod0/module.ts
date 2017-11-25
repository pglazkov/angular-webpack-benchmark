
import {Component, NgModule} from '@angular/core';
import {Cmp1400Component} from './cmp0/cmp';
import {Cmp1401Component} from './cmp1/cmp';
import {Cmp1402Component} from './cmp2/cmp';
import {Cmp1403Component} from './cmp3/cmp';
import {Cmp1404Component} from './cmp4/cmp';
import {Cmp1405Component} from './cmp5/cmp';
import {Cmp1406Component} from './cmp6/cmp';
import {Cmp1407Component} from './cmp7/cmp';
import {Cmp1408Component} from './cmp8/cmp';
import {Cmp1409Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod0',
  template: '<div>team4: <cmp-1400></cmp-1400><cmp-1401></cmp-1401><cmp-1402></cmp-1402><cmp-1403></cmp-1403><cmp-1404></cmp-1404><cmp-1405></cmp-1405><cmp-1406></cmp-1406><cmp-1407></cmp-1407><cmp-1408></cmp-1408><cmp-1409></cmp-1409></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1400Component,Cmp1401Component,Cmp1402Component,Cmp1403Component,Cmp1404Component,Cmp1405Component,Cmp1406Component,Cmp1407Component,Cmp1408Component,Cmp1409Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod0 {}

        