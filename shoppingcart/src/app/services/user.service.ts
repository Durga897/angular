import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

constructor(private http:HttpClient) { }
  
  public addUser(user:any){
 // return this.http.post('${baseUrl}/user/save/',user)
  return this.http.post('http://localhost:8080/user/save',user)}

  public addSeller(user:any){
     return this.http.post('http://localhost:8080/seller/save',user)}
     
     public updateSellerProfile(user:any){
      return this.http.put('http://localhost:8080/user/update',user)}
    
}