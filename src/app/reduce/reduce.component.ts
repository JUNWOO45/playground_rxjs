import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.less']
})
export class ReduceComponent implements OnInit {
  products;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    this.products = this.productsService.getProducts();

    from(this.products)
      .pipe(
        reduce((acc, item) => { return acc + item.price; }, 0)
      )
      .subscribe(console.log)
  }

}
