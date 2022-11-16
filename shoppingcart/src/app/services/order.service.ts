import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../order-details';
import { Product } from '../product';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  public placeOrder(user:User){
    return this.http.post('http://localhost:8080/order/save',user)}
     
    public buyProduct(product:Product){
      return this.http.post('http://localhost:8080/order/buyNow',product)}

    public getOrders(){
      return this.http.get('http://localhost:8080/order/fetchOrders')}

      public getOrderDetails(productId:number,orderId:number):Observable<OrderDetails>{
        return this.http.get<OrderDetails>('http://localhost:8080/order/get/'+orderId+'/'+productId)}   

        public getPlacedOrders(){
          return this.http.get('http://localhost:8080/order/fetchPlacedOrders')}

          public toShipOrder(orderId:number,productId:number){
            return this.http.get('http://localhost:8080/order/toShipOrder/'+orderId+'/'+productId)}

            public getCustomerOrders(){
              return this.http.get('http://localhost:8080/order/fetchCustomerOrders')}
       
          
  }

