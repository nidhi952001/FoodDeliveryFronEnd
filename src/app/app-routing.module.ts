import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantAdminComponent } from './component/restaurant-admin/restaurant-admin.component';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { ItemComponent } from './component/item/item.component';
import { InvoiceComponent } from './component/invoice/invoice.component';

const routes: Routes = [
  {path:'',component:InvoiceComponent},
  {path:'item/:id',component:ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
