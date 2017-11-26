import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './lazy1.routes';
import { Lazy1Component } from './lazy1.component';
import { SharedModule } from '../shared';

console.log('`Lazy1` bundle loaded asynchronously');

@NgModule({
  declarations: [
    Lazy1Component
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class Lazy1Module {
  public static routes = routes;
}
