import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../class/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerdataService {

  constructor(private http:HttpClient) { }

  retriveAllCustomer(){
    return this.http.get<Customer[]>
      (`http://localhost:9999/getAllCustomer`);
  }
  getCustomerById(id:number){
    return this.http.get<Customer[]>
    (`http://localhost:9999/getCustomerById/${id}`);
  }
}
