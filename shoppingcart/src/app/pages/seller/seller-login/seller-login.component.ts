import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  constructor(private loginService:LoginService,private snack:MatSnackBar) { }
  public loginData={
    username:'',
    password:'',
  }
  ngOnInit(): void {
  }

  login(){
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
          // redirect.....Seller
          //redirectt......Customer
          this.snack.open('user login sucessfull','',{duration:3000,verticalPosition:'top'});
        },
        (error)=>{
          console.log(error);
             } 
             
      ); 
      },
    (error)=>{
      this.snack.open('Invalid credential','',{duration:3000,verticalPosition:'top'});
    }  
   ) 
 }
}
}
