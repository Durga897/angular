import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  user:User=new User();
  
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.login.getCurrentUser().subscribe ((data:any)=>{
      this.user=data;})
  }
}
