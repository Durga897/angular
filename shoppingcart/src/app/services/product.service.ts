import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  public addProduct(product:any){
    return this.http.post('http://localhost:8080/product/save',product)}

    getProductList():Observable<Product[]>{
      return this.http.get<Product[]>('http://localhost:8080/seller/findProducts')}

      getProduct(id:number):Observable<Product>{
        return this.http.get<Product>('http://localhost:8080/product/get/'+id)}

        updateProduct(product:Product):Observable<Product>{
          return this.http.put<Product>('http://localhost:8080/product/update',product)}

          getAllAvailableProduct():Observable<Product[]>{
            return this.http.get<Product[]>('http://localhost:8080/product/getAll')}

            findProduct(name:string):Observable<Product[]>{
              return this.http.get<Product[]>('http://localhost:8080/product/search/'+name)}

}
function $http(arg0: { method: string; url: string; withCredentials: boolean; headers: { 'X-Requested-With': string; }; }): Observable<Product[]> {
  throw new Error('Function not implemented.');
}

