import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { HttpClientModule } from '@angular/common/http';
import { FoodCatalogueModule } from './food-catalogue/food-catalogue.module';
import { OrderSummaryModule } from './order-summary/order-summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RestaurantsModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
