
import {Component, NgModule} from '@angular/core';
import {Cmp1850Component} from './cmp0/cmp';
import {Cmp1851Component} from './cmp1/cmp';
import {Cmp1852Component} from './cmp2/cmp';
import {Cmp1853Component} from './cmp3/cmp';
import {Cmp1854Component} from './cmp4/cmp';
import {Cmp1855Component} from './cmp5/cmp';
import {Cmp1856Component} from './cmp6/cmp';
import {Cmp1857Component} from './cmp7/cmp';
import {Cmp1858Component} from './cmp8/cmp';
import {Cmp1859Component} from './cmp9/cmp';
@Component({
  selector: 'team8-mod5',
  template: '<div>team8: <cmp-1850></cmp-1850><cmp-1851></cmp-1851><cmp-1852></cmp-1852><cmp-1853></cmp-1853><cmp-1854></cmp-1854><cmp-1855></cmp-1855><cmp-1856></cmp-1856><cmp-1857></cmp-1857><cmp-1858></cmp-1858><cmp-1859></cmp-1859></div>',
})
export class Comp {}

@NgModule({
  declarations: [Comp, Cmp1850Component,Cmp1851Component,Cmp1852Component,Cmp1853Component,Cmp1854Component,Cmp1855Component,Cmp1856Component,Cmp1857Component,Cmp1858Component,Cmp1859Component],
  exports: [Comp],
})
export class Module_biofuels_team8_mod5 {}

        