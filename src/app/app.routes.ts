import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lazy1',
    loadChildren: './+lazy1/lazy1.module#Lazy1Module'
  },
  {
    path: 'lazy2',
    loadChildren: './+lazy2/lazy2.module#Lazy2Module'
  },
  {
    path: '**',
    component: NoContentComponent
  }
];
