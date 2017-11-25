
import {Component, NgModule} from '@angular/core';
import {Cmp1490Component} from './cmp0/cmp';
import {Cmp1491Component} from './cmp1/cmp';
import {Cmp1492Component} from './cmp2/cmp';
import {Cmp1493Component} from './cmp3/cmp';
import {Cmp1494Component} from './cmp4/cmp';
import {Cmp1495Component} from './cmp5/cmp';
import {Cmp1496Component} from './cmp6/cmp';
import {Cmp1497Component} from './cmp7/cmp';
import {Cmp1498Component} from './cmp8/cmp';
import {Cmp1499Component} from './cmp9/cmp';
@Component({
  selector: 'team4-mod9',
  template: '<div>team4: <cmp-1490></cmp-1490><cmp-1491></cmp-1491><cmp-1492></cmp-1492><cmp-1493></cmp-1493><cmp-1494></cmp-1494><cmp-1495></cmp-1495><cmp-1496></cmp-1496><cmp-1497></cmp-1497><cmp-1498></cmp-1498><cmp-1499></cmp-1499></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1490Component,Cmp1491Component,Cmp1492Component,Cmp1493Component,Cmp1494Component,Cmp1495Component,Cmp1496Component,Cmp1497Component,Cmp1498Component,Cmp1499Component],
  exports: [Comp],
})
export class Module_biofuels_team4_mod9 {}

        