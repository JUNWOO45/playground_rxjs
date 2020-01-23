import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-flat-map',
  templateUrl: './flat-map.component.html',
  styleUrls: ['./flat-map.component.less']
})
export class FlatMapComponent implements OnInit {

  API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor() { }

  ngOnInit() {
    console.clear();
    fromEvent(document.getElementById('flatMap-div'), 'click')
      .pipe(
        mergeMap(() => ajax.getJSON(this.API_URL))
      )
      .subscribe(console.log)
  }

}
