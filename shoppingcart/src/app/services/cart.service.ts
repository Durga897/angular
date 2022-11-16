import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) { }
         addToCarts(id:number):Observable<Product>{
          return this.http.post<Product>('http://localhost:8080/cart/addToCart/'+id,id)}

          getCartItem(){return this.http.get('http://localhost:8080/cart/getAll')}

          increaseCartItemQuantity(id:number){return this.http.put('http://localhost:8080/cart/increaseCartItemQuantity/'+id,id)}

          decreaseCartItemQuantity(id:number){return this.http.put('http://localhost:8080/cart/decreaseCartItemQuantity/'+id,id)}
          
          removeCartItem(id:number){return this.http.delete('http://localhost:8080/cart/delete/'+id)}
        }
