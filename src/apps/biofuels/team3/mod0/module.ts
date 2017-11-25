
import {Component, NgModule} from '@angular/core';
import {Cmp1300Component} from './cmp0/cmp';
import {Cmp1301Component} from './cmp1/cmp';
import {Cmp1302Component} from './cmp2/cmp';
import {Cmp1303Component} from './cmp3/cmp';
import {Cmp1304Component} from './cmp4/cmp';
import {Cmp1305Component} from './cmp5/cmp';
import {Cmp1306Component} from './cmp6/cmp';
import {Cmp1307Component} from './cmp7/cmp';
import {Cmp1308Component} from './cmp8/cmp';
import {Cmp1309Component} from './cmp9/cmp';
@Component({
  selector: 'team3-mod0',
  template: '<div>team3: <cmp-1300></cmp-1300><cmp-1301></cmp-1301><cmp-1302></cmp-1302><cmp-1303></cmp-1303><cmp-1304></cmp-1304><cmp-1305></cmp-1305><cmp-1306></cmp-1306><cmp-1307></cmp-1307><cmp-1308></cmp-1308><cmp-1309></cmp-1309></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1300Component,Cmp1301Component,Cmp1302Component,Cmp1303Component,Cmp1304Component,Cmp1305Component,Cmp1306Component,Cmp1307Component,Cmp1308Component,Cmp1309Component],
  exports: [Comp],
})
export class Module_biofuels_team3_mod0 {}

        