import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { SkipComponent } from './skip/skip.component';
import { SkipwhileComponent } from './skipwhile/skipwhile.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    FilterComponent,
    SkipComponent,
    SkipwhileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
