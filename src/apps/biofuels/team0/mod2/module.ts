
import {Component, NgModule} from '@angular/core';
import {Cmp1020Component} from './cmp0/cmp';
import {Cmp1021Component} from './cmp1/cmp';
import {Cmp1022Component} from './cmp2/cmp';
import {Cmp1023Component} from './cmp3/cmp';
import {Cmp1024Component} from './cmp4/cmp';
import {Cmp1025Component} from './cmp5/cmp';
import {Cmp1026Component} from './cmp6/cmp';
import {Cmp1027Component} from './cmp7/cmp';
import {Cmp1028Component} from './cmp8/cmp';
import {Cmp1029Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod2',
  template: '<div>team0: <cmp-1020></cmp-1020><cmp-1021></cmp-1021><cmp-1022></cmp-1022><cmp-1023></cmp-1023><cmp-1024></cmp-1024><cmp-1025></cmp-1025><cmp-1026></cmp-1026><cmp-1027></cmp-1027><cmp-1028></cmp-1028><cmp-1029></cmp-1029></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1020Component,Cmp1021Component,Cmp1022Component,Cmp1023Component,Cmp1024Component,Cmp1025Component,Cmp1026Component,Cmp1027Component,Cmp1028Component,Cmp1029Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod2 {}

        