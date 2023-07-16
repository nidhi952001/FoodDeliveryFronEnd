import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../component/item/item.component';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  constructor(private http:HttpClient) { }

  retriveAllItem(){
    return this.http.get<Item[]>(`http://localhost:8080/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`http://localhost:8080/getItemByRestId/${id}`);

  }

}
