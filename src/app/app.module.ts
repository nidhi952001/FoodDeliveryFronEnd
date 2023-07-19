import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MenuComponent } from './component/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { InvoiceComponent } from './component/invoice/invoice.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentModuleComponent } from './component/payment-module/payment-module.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { RestaurantAdminComponent } from './component/restaurant-admin/restaurant-admin.component';
import { ItemComponent } from './component/item/item.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { CustomerDataComponent } from './component/customer-data/customer-data.component';
import { AdminMenuComponent } from './component/admin-menu/admin-menu.component';
import { CustomerDataEditComponent } from './component/customer-data-edit/customer-data-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    InvoiceComponent,
    PaymentComponent,
    PaymentModuleComponent,
    RestaurantsComponent,
    RestaurantAdminComponent,
    ItemComponent,
    AdminLoginComponent,
    CustomerDataComponent,
    AdminMenuComponent,
    CustomerDataEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
