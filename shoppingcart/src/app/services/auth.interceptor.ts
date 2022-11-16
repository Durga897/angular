import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterCeptor implements HttpInterceptor{
   
    constructor(private loginService:LoginService){

    }
      
intercept(
      req: HttpRequest<any>, 
      next: HttpHandler
      ): Observable<HttpEvent<any>> {
              
        let token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJEdXJnYTEyMyIsImV4cCI6MTY2ODE5OTcwNCwiaWF0IjoxNjY4MTYzNzA0fQ.Ui7tRIPixSp5iJnCxHHCziUBGqUvxtrtoaMGCs-7QSg';
        console.log(token);
        console.log("inside innterceptor")
          let authReq= req.clone({setHeaders:{Authorization:'Bearer '+ token}});
      return next.handle(authReq);
    }
}


