
import {Component, NgModule} from '@angular/core';
import {Cmp1530Component} from './cmp0/cmp';
import {Cmp1531Component} from './cmp1/cmp';
import {Cmp1532Component} from './cmp2/cmp';
import {Cmp1533Component} from './cmp3/cmp';
import {Cmp1534Component} from './cmp4/cmp';
import {Cmp1535Component} from './cmp5/cmp';
import {Cmp1536Component} from './cmp6/cmp';
import {Cmp1537Component} from './cmp7/cmp';
import {Cmp1538Component} from './cmp8/cmp';
import {Cmp1539Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod3',
  template: '<div>team5: <cmp-1530></cmp-1530><cmp-1531></cmp-1531><cmp-1532></cmp-1532><cmp-1533></cmp-1533><cmp-1534></cmp-1534><cmp-1535></cmp-1535><cmp-1536></cmp-1536><cmp-1537></cmp-1537><cmp-1538></cmp-1538><cmp-1539></cmp-1539></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1530Component,Cmp1531Component,Cmp1532Component,Cmp1533Component,Cmp1534Component,Cmp1535Component,Cmp1536Component,Cmp1537Component,Cmp1538Component,Cmp1539Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod3 {}

        