import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/order-details';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-received-orders',
  templateUrl: './received-orders.component.html',
  styleUrls: ['./received-orders.component.css']
})
export class ReceivedOrdersComponent implements OnInit {

  orders: OrderDetails[] = [];
  constructor(private orderService:OrderService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.getOrders();    
  }

  private getOrders(){
    this.orderService.getPlacedOrders().subscribe((data:any)=>{
    this.orders=data;
    });
}

toShipOrder(productId:number,orderId:number){
  console.log(productId+orderId)
    this.orderService.toShipOrder(orderId,productId).subscribe((data:any)=>{});
}
}
