
import {Component} from '@angular/core';
@Component({
  selector: 'cmp-1000',
  template: '<strong>1000</strong>&nbsp;',
})
export class Cmp1000Component {
  add1000(x: number) {
    return x + 1000;
  }
}