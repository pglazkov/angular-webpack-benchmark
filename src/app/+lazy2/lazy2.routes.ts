import { Lazy2Component } from './lazy2.component';

export const routes = [
  {
    path: '',    
    children: [
      {
        path: '',
        component: Lazy2Component
      },
      {
        path: 'lazy-child',
        loadChildren: '../+lazy-child/lazy-child.module#LazyChildModule'
      }
    ]
  }
];
