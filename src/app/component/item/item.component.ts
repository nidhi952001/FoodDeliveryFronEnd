import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/class/item';
import { ItemServiceService } from 'src/app/service/item-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id:number=0;

  items : Item[] = [];
  constructor(private itemservice: ItemServiceService,private router:Router,private route:ActivatedRoute){};

  ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
    // this.itemservice.retriveAllItem().subscribe(
    //   response =>{
    //     this.items = response;
    //     console.log(response);
    //     console.log(this.items)
    //   }
    // )

      this.itemservice.getItemByRestId(this.id).subscribe(
        data=>{
        
        console.log(data);
        this.items=data;
        }
       )

  }

}
