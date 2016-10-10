import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeocodeAddressComponent } from './geocode-address/geocode-address.component';
import { ColumnTestComponent } from './column-test/column-test.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocodeAddressComponent,
    ColumnTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
