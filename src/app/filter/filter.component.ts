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
    this.products = this.productsService.getProducts();
    from(this.products)
      .pipe(
        filter(item => {
          if(item?.customFunc()) {
            console.log('hi')
          }
        })
      )
      .subscribe(console.log)
  }

}
