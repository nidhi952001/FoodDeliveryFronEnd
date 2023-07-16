import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantAdminComponent } from './component/restaurant-admin/restaurant-admin.component';
import { ItemComponent } from './component/item/item.component';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentModuleComponent } from './component/payment-module/payment-module.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantAdminComponent,
    ItemComponent,
    InvoiceComponent,
    PaymentComponent,
    PaymentModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
