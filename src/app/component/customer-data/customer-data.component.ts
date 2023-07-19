import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { CustomerdataService } from 'src/app/service/customerdata.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {
  customer:Customer[]=[];
 

  constructor(private customerservice:CustomerdataService,private router:Router){}
  ngOnInit(): void {
    this.customerservice.retriveAllCustomer().subscribe(
      response =>{
        this.customer = response;
        console.log(this.customer);
        console.log("ddbfhdsfbdhf");
      }
    )
  }

  customerUpdate(id:number){
    this.router.navigate(['customerEdit',id]);
  }

  customerDelete(id:number){}

}
