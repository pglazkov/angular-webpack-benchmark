
import {Component, NgModule} from '@angular/core';
import {Cmp1010Component} from './cmp0/cmp';
import {Cmp1011Component} from './cmp1/cmp';
import {Cmp1012Component} from './cmp2/cmp';
import {Cmp1013Component} from './cmp3/cmp';
import {Cmp1014Component} from './cmp4/cmp';
import {Cmp1015Component} from './cmp5/cmp';
import {Cmp1016Component} from './cmp6/cmp';
import {Cmp1017Component} from './cmp7/cmp';
import {Cmp1018Component} from './cmp8/cmp';
import {Cmp1019Component} from './cmp9/cmp';
@Component({
  selector: 'team0-mod1',
  template: '<div>team0: <cmp-1010></cmp-1010><cmp-1011></cmp-1011><cmp-1012></cmp-1012><cmp-1013></cmp-1013><cmp-1014></cmp-1014><cmp-1015></cmp-1015><cmp-1016></cmp-1016><cmp-1017></cmp-1017><cmp-1018></cmp-1018><cmp-1019></cmp-1019></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1010Component,Cmp1011Component,Cmp1012Component,Cmp1013Component,Cmp1014Component,Cmp1015Component,Cmp1016Component,Cmp1017Component,Cmp1018Component,Cmp1019Component],
  exports: [Comp],
})
export class Module_biofuels_team0_mod1 {}

        