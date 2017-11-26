import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',  // <home></home>
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }
}
