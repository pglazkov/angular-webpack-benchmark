
import {Component, NgModule} from '@angular/core';
import {Cmp1500Component} from './cmp0/cmp';
import {Cmp1501Component} from './cmp1/cmp';
import {Cmp1502Component} from './cmp2/cmp';
import {Cmp1503Component} from './cmp3/cmp';
import {Cmp1504Component} from './cmp4/cmp';
import {Cmp1505Component} from './cmp5/cmp';
import {Cmp1506Component} from './cmp6/cmp';
import {Cmp1507Component} from './cmp7/cmp';
import {Cmp1508Component} from './cmp8/cmp';
import {Cmp1509Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod0',
  template: '<div>team5: <cmp-1500></cmp-1500><cmp-1501></cmp-1501><cmp-1502></cmp-1502><cmp-1503></cmp-1503><cmp-1504></cmp-1504><cmp-1505></cmp-1505><cmp-1506></cmp-1506><cmp-1507></cmp-1507><cmp-1508></cmp-1508><cmp-1509></cmp-1509></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1500Component,Cmp1501Component,Cmp1502Component,Cmp1503Component,Cmp1504Component,Cmp1505Component,Cmp1506Component,Cmp1507Component,Cmp1508Component,Cmp1509Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod0 {}

        