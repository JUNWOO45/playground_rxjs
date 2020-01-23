import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.less']
})
export class TakeComponent implements OnInit {
  products;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.clear()
    this.products = this.productsService.getProducts();
    from(this.products)
      .pipe(
        take(2)
      )
      .subscribe(console.log)
    
  }

}
