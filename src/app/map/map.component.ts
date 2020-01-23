import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  products;
  constructor(
    private s: ProductsService
  ) { }

  ngOnInit() {
    console.clear();
    this.products = this.s.getProducts();
    from(this.products)
      .pipe(
        take(2),
        map(v => `${v.name}의 가격은 ${v.price}입니다.`)
      )
      .subscribe(console.log)
  }

}
