import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.less']
})
export class PluckComponent implements OnInit {
  products;
  constructor(
    private s: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    this.products = this.s.getProducts();
    from(this.products)
      .pipe(
        pluck('reviews')
      )
      .subscribe(console.log)
  }

}
