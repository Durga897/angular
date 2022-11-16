import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { map, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public loginStatus=new Subject<boolean>();
  constructor(private http:HttpClient) { }
  
  //current user
  public getCurrentUser(){
    return this.http.get('http://localhost:8080/currentUser');
  }
  
  //generate token
public generateToken(user:any){
  return this.http.post('http://localhost:8080/generate-token',user)
} 

public authenticate(username :any, password:any) {
  return this.http
    .post<any>("http://localhost:8080/generate-token", { username, password })
    .pipe(
      map(userData => {
        sessionStorage.setItem("username", username);
        let tokenStr = "Bearer " + userData.token;
        sessionStorage.setItem("token", tokenStr);
        return userData;
      })
    );
}


//login user: set token in localStorage
public loginUser(token:any){
  
  localStorage.setItem('token',token);
 
  return true;
}

//isLogin: user is logged
public isLoggedIn(){
  let tokenStr=localStorage.getItem("token")
  if(tokenStr==undefined|| tokenStr==''||tokenStr==null){
    return false;
  }
  else{
    return true;
  }
}


//logout: remove token from localStorage
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

// get token
public getToken(){
  return localStorage.getItem('token');
}

// set userDetail
public setUser(user:any){
localStorage.setItem('user',JSON.stringify(user))
}

//getUser
public getUser(){
  let userStr=localStorage.getItem('user');
  if(userStr!=null){
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

//get user role
public getUserRole(){
  let user=this.getUser();
  return user.roles[0].name;
  // return user.authorities[0].authority;
}

public isCustomer(){
  let user=this.getUser();
  if(user.roles[0].name=='CUSTOMER'){
    return true;
  }
  return false;
  // return user.authorities[0].authority;
}

}