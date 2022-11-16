import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User=new User();
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.login.getCurrentUser().subscribe ((data:any)=>{
      this.user=data;})
  }
}
