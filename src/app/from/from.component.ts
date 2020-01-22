import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.less']
})
export class FromComponent implements OnInit {

  products;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    console.clear()
    this.products = this.productsService.getProducts();
    from(this.products).subscribe(console.log);
  }

}
