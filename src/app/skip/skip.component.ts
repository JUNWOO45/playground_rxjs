import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.less']
})
export class SkipComponent implements OnInit {
  products;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    this.products = this.productService.getProducts();
    from(this.products)
      .pipe(
        skip(2)
      )
      .subscribe(console.log)
  }

}
