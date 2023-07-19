import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../class/item';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  constructor(private http:HttpClient) { }

  retriveAllItem(){
    return this.http.get<Item[]>(`http://localhost:9999/getAllItems`);
  }

  getItemByRestId(id:number){
    return this.http.get<Item[]>(`http://localhost:9999/getItemByRestId/${id}`);

  }

}
