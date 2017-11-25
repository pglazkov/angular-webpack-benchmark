
import {Component, NgModule} from '@angular/core';
import {Cmp1430Component} from './cmp0/cmp';
import {Cmp1431Component} from './cmp1/cmp';
import {Cmp1432Component} from './cmp2/cmp';
import {Cmp1433Component} from './cmp3/cmp';
import {Cmp1434Component} from './cmp4/cmp';
import {Cmp1435Component} from './cmp5/cmp';
import {Cmp1436Component} from './cmp6/cmp';
import {Cmp1437Component} from './cmp7/cmp';
import {Cmp1438Component} from './cmp8/cmp';
import {Cmp1439Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod3',
  template: '<div>team4: <cmp-1430></cmp-1430><cmp-1431></cmp-1431><cmp-1432></cmp-1432><cmp-1433></cmp-1433><cmp-1434></cmp-1434><cmp-1435></cmp-1435><cmp-1436></cmp-1436><cmp-1437></cmp-1437><cmp-1438></cmp-1438><cmp-1439></cmp-1439></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1430Component,Cmp1431Component,Cmp1432Component,Cmp1433Component,Cmp1434Component,Cmp1435Component,Cmp1436Component,Cmp1437Component,Cmp1438Component,Cmp1439Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod3 {}

        