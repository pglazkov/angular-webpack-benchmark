
import {Component, NgModule} from '@angular/core';
import {Cmp1930Component} from './cmp0/cmp';
import {Cmp1931Component} from './cmp1/cmp';
import {Cmp1932Component} from './cmp2/cmp';
import {Cmp1933Component} from './cmp3/cmp';
import {Cmp1934Component} from './cmp4/cmp';
import {Cmp1935Component} from './cmp5/cmp';
import {Cmp1936Component} from './cmp6/cmp';
import {Cmp1937Component} from './cmp7/cmp';
import {Cmp1938Component} from './cmp8/cmp';
import {Cmp1939Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod3',
  template: '<div>team9: <cmp-1930></cmp-1930><cmp-1931></cmp-1931><cmp-1932></cmp-1932><cmp-1933></cmp-1933><cmp-1934></cmp-1934><cmp-1935></cmp-1935><cmp-1936></cmp-1936><cmp-1937></cmp-1937><cmp-1938></cmp-1938><cmp-1939></cmp-1939></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1930Component,Cmp1931Component,Cmp1932Component,Cmp1933Component,Cmp1934Component,Cmp1935Component,Cmp1936Component,Cmp1937Component,Cmp1938Component,Cmp1939Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod3 {}

        