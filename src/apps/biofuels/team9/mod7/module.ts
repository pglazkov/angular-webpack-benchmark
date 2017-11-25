
import {Component, NgModule} from '@angular/core';
import {Cmp1970Component} from './cmp0/cmp';
import {Cmp1971Component} from './cmp1/cmp';
import {Cmp1972Component} from './cmp2/cmp';
import {Cmp1973Component} from './cmp3/cmp';
import {Cmp1974Component} from './cmp4/cmp';
import {Cmp1975Component} from './cmp5/cmp';
import {Cmp1976Component} from './cmp6/cmp';
import {Cmp1977Component} from './cmp7/cmp';
import {Cmp1978Component} from './cmp8/cmp';
import {Cmp1979Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod7',
  template: '<div>team9: <cmp-1970></cmp-1970><cmp-1971></cmp-1971><cmp-1972></cmp-1972><cmp-1973></cmp-1973><cmp-1974></cmp-1974><cmp-1975></cmp-1975><cmp-1976></cmp-1976><cmp-1977></cmp-1977><cmp-1978></cmp-1978><cmp-1979></cmp-1979></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1970Component,Cmp1971Component,Cmp1972Component,Cmp1973Component,Cmp1974Component,Cmp1975Component,Cmp1976Component,Cmp1977Component,Cmp1978Component,Cmp1979Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod7 {}

        