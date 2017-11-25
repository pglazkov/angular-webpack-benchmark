
import {Component, NgModule} from '@angular/core';
import {Cmp1550Component} from './cmp0/cmp';
import {Cmp1551Component} from './cmp1/cmp';
import {Cmp1552Component} from './cmp2/cmp';
import {Cmp1553Component} from './cmp3/cmp';
import {Cmp1554Component} from './cmp4/cmp';
import {Cmp1555Component} from './cmp5/cmp';
import {Cmp1556Component} from './cmp6/cmp';
import {Cmp1557Component} from './cmp7/cmp';
import {Cmp1558Component} from './cmp8/cmp';
import {Cmp1559Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod5',
  template: '<div>team5: <cmp-1550></cmp-1550><cmp-1551></cmp-1551><cmp-1552></cmp-1552><cmp-1553></cmp-1553><cmp-1554></cmp-1554><cmp-1555></cmp-1555><cmp-1556></cmp-1556><cmp-1557></cmp-1557><cmp-1558></cmp-1558><cmp-1559></cmp-1559></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1550Component,Cmp1551Component,Cmp1552Component,Cmp1553Component,Cmp1554Component,Cmp1555Component,Cmp1556Component,Cmp1557Component,Cmp1558Component,Cmp1559Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod5 {}

        