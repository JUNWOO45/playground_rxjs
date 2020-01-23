import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { AppComponent } from './app.component';
import { SkipComponent } from './skip/skip.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';
import { TakeComponent } from './take/take.component';
import { DistinctComponent } from './distinct/distinct.component';
import { ReduceComponent } from './reduce/reduce.component';
import { SingleComponent } from './single/single.component';
import { MapComponent } from './map/map.component';
import { PluckComponent } from './pluck/pluck.component';
import { FlatMapComponent } from './flat-map/flat-map.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'from', component: FromComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'skipWhile', component: SkipwhileComponent },
  { path: 'take', component: TakeComponent },
  { path: 'distinct', component: DistinctComponent },
  { path: 'reduce', component: ReduceComponent },
  { path: 'single', component: SingleComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'flatMap', component: FlatMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
