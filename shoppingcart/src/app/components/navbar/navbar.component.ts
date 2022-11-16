import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLoggedIn=false;
// isCustomer=false;
user=null;
constructor(public loginService:LoginService,private productService:ProductService,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
  this.isLoggedIn=this.loginService.isLoggedIn();
  // this.isCustomer=this.loginService.isCustomer();
  this.user=this.loginService.getUser();
  this.loginService.loginStatus.asObservable().subscribe(data=>{
    this.isLoggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
  });
  
}


// loginService.getUser().roles[0]
  public logout(){
    this.loginService.logout();
    this.loginService.loginStatus.next(false);
    this.isLoggedIn=false;
    // this.isCustomer=false;
    this.user=null;
    // this.router.navigate['login'];
    // window.location.reload();
    window.location.reload();
  }

  findProduct(){
    const product:any=document.getElementById("product") as HTMLInputElement | null;
    const name = product?.value;
    this.router.navigate(['search-product',name])
  }

  public isCustomer(){
    let user=this.loginService.getUser();
    if(user.roles[0].name=='CUSTOMER'){
      return true;
    }
    return false;
    // return user.authorities[0].authority;
  }

  public isSeller(){
    let user=this.loginService.getUser();
    if(user.roles[0].name=='SELLER'){
      return true;
    }
    return false;
    // return user.authorities[0].authority;
  }


}
