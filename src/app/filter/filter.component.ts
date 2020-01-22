import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.clear()
    this.products = this.productsService.getProducts();
    from(this.products)
      .pipe(
        filter(item => {
          return item.price < 1000
        })
      )
      .subscribe(console.log)
  }

}
