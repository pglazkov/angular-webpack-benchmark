import { Lazy1Component } from './lazy1.component';

export const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: Lazy1Component
      },
      {
        path: 'lazy-child',
        loadChildren: '../+lazy-child/lazy-child.module#LazyChildModule'
      }
    ]
  }
];
