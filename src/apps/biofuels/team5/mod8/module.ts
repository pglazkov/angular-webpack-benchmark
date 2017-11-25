
import {Component, NgModule} from '@angular/core';
import {Cmp1580Component} from './cmp0/cmp';
import {Cmp1581Component} from './cmp1/cmp';
import {Cmp1582Component} from './cmp2/cmp';
import {Cmp1583Component} from './cmp3/cmp';
import {Cmp1584Component} from './cmp4/cmp';
import {Cmp1585Component} from './cmp5/cmp';
import {Cmp1586Component} from './cmp6/cmp';
import {Cmp1587Component} from './cmp7/cmp';
import {Cmp1588Component} from './cmp8/cmp';
import {Cmp1589Component} from './cmp9/cmp';
@Component({
  selector: 'team5-mod8',
  template: '<div>team5: <cmp-1580></cmp-1580><cmp-1581></cmp-1581><cmp-1582></cmp-1582><cmp-1583></cmp-1583><cmp-1584></cmp-1584><cmp-1585></cmp-1585><cmp-1586></cmp-1586><cmp-1587></cmp-1587><cmp-1588></cmp-1588><cmp-1589></cmp-1589></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1580Component,Cmp1581Component,Cmp1582Component,Cmp1583Component,Cmp1584Component,Cmp1585Component,Cmp1586Component,Cmp1587Component,Cmp1588Component,Cmp1589Component],
  exports: [Comp],
})
export class Module_biofuels_team5_mod8 {}

        