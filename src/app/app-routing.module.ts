import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'from', component: FromComponent },
  { path: 'filter', component: FilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
