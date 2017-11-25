
import {Component, NgModule} from '@angular/core';
import {Cmp1990Component} from './cmp0/cmp';
import {Cmp1991Component} from './cmp1/cmp';
import {Cmp1992Component} from './cmp2/cmp';
import {Cmp1993Component} from './cmp3/cmp';
import {Cmp1994Component} from './cmp4/cmp';
import {Cmp1995Component} from './cmp5/cmp';
import {Cmp1996Component} from './cmp6/cmp';
import {Cmp1997Component} from './cmp7/cmp';
import {Cmp1998Component} from './cmp8/cmp';
import {Cmp1999Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod9',
  template: '<div>team9: <cmp-1990></cmp-1990><cmp-1991></cmp-1991><cmp-1992></cmp-1992><cmp-1993></cmp-1993><cmp-1994></cmp-1994><cmp-1995></cmp-1995><cmp-1996></cmp-1996><cmp-1997></cmp-1997><cmp-1998></cmp-1998><cmp-1999></cmp-1999></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1990Component,Cmp1991Component,Cmp1992Component,Cmp1993Component,Cmp1994Component,Cmp1995Component,Cmp1996Component,Cmp1997Component,Cmp1998Component,Cmp1999Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod9 {}

        