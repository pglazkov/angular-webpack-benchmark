import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './lazy2.routes';
import { Lazy2Component } from './lazy2.component';
import { SharedModule } from '../shared';

console.log('`Lazy2` bundle loaded asynchronously');

@NgModule({
  declarations: [
    Lazy2Component
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Lazy2Module {
  public static routes = routes;
}
