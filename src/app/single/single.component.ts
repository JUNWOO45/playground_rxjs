import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.less']
})
export class SingleComponent implements OnInit {
  products = [1,2,3,4,4,5];
  constructor() { }

  ngOnInit() {
    console.clear();
    from(this.products)
      .pipe(
        single(v => v === 4)
      )
      .subscribe(console.log)
  }

}
