
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Module_team0} from './team0/module';
import {Module_team1} from './team1/module';
import {Module_team2} from './team2/module';
import {Module_team3} from './team3/module';
import {Module_team4} from './team4/module';
import {Module_team5} from './team5/module';
import {Module_team6} from './team6/module';
import {Module_team7} from './team7/module';
import {Module_team8} from './team8/module';
import {Module_team9} from './team9/module';

@Component({
selector: 'app',
template: `<h1>Homepage</h1>
<team0-nav></team0-nav>
<team1-nav></team1-nav>
<team2-nav></team2-nav>
<team3-nav></team3-nav>
<team4-nav></team4-nav>
<team5-nav></team5-nav>
<team6-nav></team6-nav>
<team7-nav></team7-nav>
<team8-nav></team8-nav>
<team9-nav></team9-nav>
`,
})
export class AppComponent {}

@NgModule({
declarations: [AppComponent],
bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    Module_team0,
      Module_team1,
      Module_team2,
      Module_team3,
      Module_team4,
      Module_team5,
      Module_team6,
      Module_team7,
      Module_team8,
      Module_team9
  ],
})
export class AppModule {}
