import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Cartitem } from 'src/app/cartitem';
import { OrderDetails } from 'src/app/order-details';
import { Orders } from 'src/app/orders';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() listIndex!: number;
  orders: OrderDetails[] = [];
 
  
  constructor(private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.getOrders();
  }
  
  getOrder(productId:number,orderId:number){
    this.router.navigate(['order-details',productId,orderId])   
  }

  private getOrders(){
    this.orderService.getOrders().subscribe((data:any)=>{
    this.orders=data;
    });
  }
}