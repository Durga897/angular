import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/order-details';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  orders: OrderDetails[] = [];
  constructor(private orderService:OrderService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
      this.getOrders();    
  }

  private getOrders(){
    this.orderService.getCustomerOrders().subscribe((data:any)=>{
    this.orders=data;
    });
}
}