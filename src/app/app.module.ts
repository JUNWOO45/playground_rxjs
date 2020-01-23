import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { SkipComponent } from './skip/skip.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';
import { TakeComponent } from './take/take.component';
import { DistinctComponent } from './distinct/distinct.component';
import { ReduceComponent } from './reduce/reduce.component';
import { SingleComponent } from './single/single.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FlatMapComponent } from './flat-map/flat-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    FilterComponent,
    SkipComponent,
    SkipwhileComponent,
    TakeComponent,
    DistinctComponent,
    ReduceComponent,
    SingleComponent,
    MapComponent,
    PluckComponent,
    FlatMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
