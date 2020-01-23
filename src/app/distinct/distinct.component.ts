import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinct, take, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.less']
})
export class DistinctComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.clear();
    from([1,2,3,4,5,5,5])
      .pipe(
        takeLast(3),
        distinct(),
        // takeLast(3)
      )
      .subscribe(console.log)
  }

}
