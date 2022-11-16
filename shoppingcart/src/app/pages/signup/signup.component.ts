import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import {FormControl,FormGroup, NgForm, Validators} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  formSubmit(form:NgForm){
   
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        this.snack.open('user register sucessfully','',{duration:3000,verticalPosition:'top'});
        form.reset();
      },
     (error)=>{
      form.reset();
      this.snack.open('user already exist','',{duration:3000,verticalPosition:'top'});
     }  
    )
  
}
}
