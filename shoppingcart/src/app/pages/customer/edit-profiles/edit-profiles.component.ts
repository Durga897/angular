import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-edit-profiles',
  templateUrl: './edit-profiles.component.html',
  styleUrls: ['./edit-profiles.component.css']
})
export class EditProfilesComponent implements OnInit {

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
