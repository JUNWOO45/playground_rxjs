import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, map, tap, flatMap } from 'rxjs/operators';

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
        pluck('reviews'),
        map(v => `리뷰는 ${v}개가 존재합니다`)
      )
      .subscribe(console.log)

    fromEvent(document.getElementById('btn'), 'click')
        .pipe(
          tap(console.log),
          pluck("target", "innerText"),
          map(v => `innerText는 ${v} 입니다`)
        )
        .subscribe(console.log)

    fromEvent(document.getElementById('ajax'), 'click')
    .pipe(
      pluck("target", "innerText"),
      flatMap(v => {
        return ajax.getJSON('/src/app/products.json')
      })
    )
    .subscribe(console.log)
  }

}
