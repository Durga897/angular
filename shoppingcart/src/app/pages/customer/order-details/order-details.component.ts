import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from 'src/app/order-details';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() listIndex!: number;
  orders:OrderDetails=new OrderDetails();
  productId!: number;
  orderId!: number;
  deliveryDates!:Date;
  shippedDate!:Date;
  constructor(private orderService:OrderService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId=this.route.snapshot.params['productId'];
    this.orderId=this.route.snapshot.params['orderId'];
    this.orderService.getOrderDetails(this.productId,this.orderId).subscribe(data=>{    
    this.orders=data;
    var deliveryDate = new Date(this.orders.orders.orderedDate);
    var shippedDates=new Date(this.orders.orders.orderedDate);
    shippedDates.setDate(shippedDates.getDate()+4);
    deliveryDate.setDate(deliveryDate.getDate() +9);
    this.shippedDate=shippedDates;
    this.deliveryDates=deliveryDate;
    },error=>console.log(error));    
  }
  

  // getDeliveryDate():Date { //pass in the relative end date reference
  //   var deliveryDate = new Date();
  //   var shippedDates=new Date();
  //   deliveryDate.setDate(deliveryDate.getDate() +9);
  //   return deliveryDate
  // }
  // public getDeliveryDate():Date { //pass in the relative end date reference

  //   this.productId=this.route.snapshot.params['productId'];
  //   this.orderId=this.route.snapshot.params['orderId'];
  //   this.orderService.getOrder(this.productId,this.orderId).subscribe(data=>{
  //   this.orders=data;
  //    this.deliveryDate = this.orders.orders.orderedDate;
  //   this.deliveryDate.setDate(this.deliveryDate.getDate() +9);
  //   },error=>console.log(error)); 
  //   return this.deliveryDate;
  // }
}
