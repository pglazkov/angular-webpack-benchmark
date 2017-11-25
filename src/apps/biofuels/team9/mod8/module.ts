
import {Component, NgModule} from '@angular/core';
import {Cmp1980Component} from './cmp0/cmp';
import {Cmp1981Component} from './cmp1/cmp';
import {Cmp1982Component} from './cmp2/cmp';
import {Cmp1983Component} from './cmp3/cmp';
import {Cmp1984Component} from './cmp4/cmp';
import {Cmp1985Component} from './cmp5/cmp';
import {Cmp1986Component} from './cmp6/cmp';
import {Cmp1987Component} from './cmp7/cmp';
import {Cmp1988Component} from './cmp8/cmp';
import {Cmp1989Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod8',
  template: '<div>team9: <cmp-1980></cmp-1980><cmp-1981></cmp-1981><cmp-1982></cmp-1982><cmp-1983></cmp-1983><cmp-1984></cmp-1984><cmp-1985></cmp-1985><cmp-1986></cmp-1986><cmp-1987></cmp-1987><cmp-1988></cmp-1988><cmp-1989></cmp-1989></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1980Component,Cmp1981Component,Cmp1982Component,Cmp1983Component,Cmp1984Component,Cmp1985Component,Cmp1986Component,Cmp1987Component,Cmp1988Component,Cmp1989Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod8 {}

        