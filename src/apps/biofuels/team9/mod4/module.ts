
import {Component, NgModule} from '@angular/core';
import {Cmp1940Component} from './cmp0/cmp';
import {Cmp1941Component} from './cmp1/cmp';
import {Cmp1942Component} from './cmp2/cmp';
import {Cmp1943Component} from './cmp3/cmp';
import {Cmp1944Component} from './cmp4/cmp';
import {Cmp1945Component} from './cmp5/cmp';
import {Cmp1946Component} from './cmp6/cmp';
import {Cmp1947Component} from './cmp7/cmp';
import {Cmp1948Component} from './cmp8/cmp';
import {Cmp1949Component} from './cmp9/cmp';
@Component({
  selector: 'team9-mod4',
  template: '<div>team9: <cmp-1940></cmp-1940><cmp-1941></cmp-1941><cmp-1942></cmp-1942><cmp-1943></cmp-1943><cmp-1944></cmp-1944><cmp-1945></cmp-1945><cmp-1946></cmp-1946><cmp-1947></cmp-1947><cmp-1948></cmp-1948><cmp-1949></cmp-1949></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1940Component,Cmp1941Component,Cmp1942Component,Cmp1943Component,Cmp1944Component,Cmp1945Component,Cmp1946Component,Cmp1947Component,Cmp1948Component,Cmp1949Component],
  exports: [Comp],
})
export class Module_biofuels_team9_mod4 {}

        