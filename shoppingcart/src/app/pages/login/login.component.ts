import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

constructor(private loginService:LoginService,private snack:MatSnackBar,private router:Router) { }
  public loginData={
    username:'',
    password:'',
  }
  ngOnInit(): void {
  }


  checkLogin() {
    (this.loginService.authenticate(this.loginData.username,this.loginData.password).subscribe(
      (data:any )=> {

        alert("login");
        this.router.navigate(['seller'])
        // this.router.navigate(['seller'])
        // this.invalidLogin = false
      },
      error => {
        // this.invalidLogin = true
        // this.error = error.message;

      }
    )
    );
    }

  login(form :NgForm){
    if(this.loginData.username==''||this.loginData.username==null){
     this.snack.open('User ID is required !!','',{duration:3000,verticalPosition:'top'});
 } 
 else{
    this.loginService.generateToken(this.loginData).subscribe(
     (data:any)=>{ 
      console.log(data);  
      this.loginService.loginUser(data.token);  
      this.loginService.getCurrentUser().subscribe(
        (user:any)=>{
          this.loginService.setUser(user);
          console.log(user);
          if(this.loginService.getUserRole()=='SELLER'){
           
            this.router.navigate(['/seller/profile'])
            this.loginService.loginStatus.next(true) ;
          }
          else if(this.loginService.getUserRole()=='CUSTOMER'){
          
            this.router.navigate(['customer-home'])
            this.loginService.loginStatus.next(true) ;
          }
          else{
            this.loginService.logout();
            
          }
          // redirect.....Seller
          //redirectt......Customer
          form.reset
          // this.snack.open('user login sucessfull','',{duration:3000,verticalPosition:'top'});
        },
        (error)=>{
          form.reset
          console.log(error);
             }     
      ); 
      },
    (error)=>{
      this.snack.open('Invalid credential','',{duration:3000,verticalPosition:'top'});
      form.reset
    }  
   ) 
 }
}
}
