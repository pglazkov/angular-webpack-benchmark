
import {Component, NgModule} from '@angular/core';
import {Cmp1250Component} from './cmp0/cmp';
import {Cmp1251Component} from './cmp1/cmp';
import {Cmp1252Component} from './cmp2/cmp';
import {Cmp1253Component} from './cmp3/cmp';
import {Cmp1254Component} from './cmp4/cmp';
import {Cmp1255Component} from './cmp5/cmp';
import {Cmp1256Component} from './cmp6/cmp';
import {Cmp1257Component} from './cmp7/cmp';
import {Cmp1258Component} from './cmp8/cmp';
import {Cmp1259Component} from './cmp9/cmp';
@Component({
  selector: 'team2-mod5',
  template: '<div>team2: <cmp-1250></cmp-1250><cmp-1251></cmp-1251><cmp-1252></cmp-1252><cmp-1253></cmp-1253><cmp-1254></cmp-1254><cmp-1255></cmp-1255><cmp-1256></cmp-1256><cmp-1257></cmp-1257><cmp-1258></cmp-1258><cmp-1259></cmp-1259></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1250Component,Cmp1251Component,Cmp1252Component,Cmp1253Component,Cmp1254Component,Cmp1255Component,Cmp1256Component,Cmp1257Component,Cmp1258Component,Cmp1259Component],
  exports: [Comp],
})
export class Module_biofuels_team2_mod5 {}

        