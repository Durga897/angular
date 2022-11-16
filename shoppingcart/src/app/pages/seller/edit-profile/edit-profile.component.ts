import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public user={
    id:'',
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    phone:'',
    password:''
  }
  users:User=new User();
  constructor(private login:LoginService,private userService:UserService,private snack:MatSnackBar) { }
  
  ngOnInit(): void {
    this.login.getCurrentUser().subscribe ((data:any)=>{
      this.users=data;})
  }
  formSubmit(form :NgForm){
    this.userService.updateSellerProfile(this.users).subscribe(
      (data)=>{
        this.snack.open('record updated sucessfully','',{duration:3000,verticalPosition:'top'});
      },
     (error)=>{
      alert('something went to wrong');
     }  
    )  
}
}
