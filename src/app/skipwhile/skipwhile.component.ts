import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skipwhile',
  templateUrl: './skipwhile.component.html',
  styleUrls: ['./skipwhile.component.less']
})
export class SkipwhileComponent implements OnInit {
  products;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    this.products = this.productService.getProducts();

    from(this.products)
      .pipe(
        skipWhile(product => product.price > 500)
      )
      .subscribe(console.log)
  }

}
