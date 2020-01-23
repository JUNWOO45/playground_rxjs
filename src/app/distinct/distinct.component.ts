import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinct, take, takeLast } from 'rxjs/operators';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.less']
})
export class DistinctComponent implements OnInit {
  products = [
    {
      id: 1, name: 'pencils', price: 1000, reviews: 10, optionalChaining: {name: 'junwoo'}
    },
    {
      id: 2, name: 'eraser', price: 500, reviews: 20, optionalChaining: {name: 'yeoul'}
    },
    {
      id: 3, name: 'pencils', price: 2000, reviews: 100, customFunc() { return true }
    },
    {
      id: 4, name: 'books', price: 3000, reviews: 70
    },
    {
      id: 4, name: 'books', price: 3000, reviews: 70
    }
  ];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    console.log('[1,2,3,4,5,5,5]')
    from([1,2,3,4,5,5,5])
      .pipe(
        takeLast(3),
        distinct(),
        // takeLast(3)
      )
      .subscribe(console.log)

    console.log('----products----');
    from(this.products)
        .pipe(
          distinct(key => key.id)
        )
        .subscribe(console.log)
  }

}
