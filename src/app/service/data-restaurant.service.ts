import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant, RestaurantsComponent } from '../component/restaurants/restaurants.component';



@Injectable({
  providedIn: 'root'
})
export class DataRestaurantService {

  constructor(private http:HttpClient) { }

  retriveAllRestaurant(){
    return this.http.get<Restaurant[]>
      (`http://localhost:8080/getAllRestaurantAddress`);
  }
}
