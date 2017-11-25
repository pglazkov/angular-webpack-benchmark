
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-1337',
  template: '<strong>1337</strong>&nbsp;',
})
export class Cmp1337Component {
  add1337(x: number) {
    return x + 1337;
  }
}