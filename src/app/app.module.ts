
/*
 * _Common_ NgModule to share between our "BASE" App.Browser & App.Server module platforms
 *
 *  If something belongs to BOTH, just put it Here.
 * - If you need something to be very "platform"-specific, put it
 *   in the specific one (app.browser or app.server)
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';
import { SharedModule } from './shared';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent
  ],
  providers: [
  ]
})
export class AppModule { }
