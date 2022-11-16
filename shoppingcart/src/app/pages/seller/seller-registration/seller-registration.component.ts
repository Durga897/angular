import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {
  userForm=new FormGroup({})
  constructor(private userService:UserService,private snack:MatSnackBar) { }
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address:'',
  }
  ngOnInit(): void {
  
  }

  formSubmit(form :NgForm){
    this.userService.addSeller(this.user).subscribe(
      (data)=>{
        this.snack.open('seller register sucessfully','',{duration:3000,verticalPosition:'top'});
        form.reset()
      },
     (error)=>{
      alert('something went to wrong');
     }  
    )  
}
}

