import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartitem } from 'src/app/cartitem';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { User } from 'src/app/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: Cartitem[] = [];
  cartTotalPrice=0;
  cartTotalItem=0;
  user!: User;
  firstAlpha: any;
  secondAlpha: any;
  thirdAlpha:any;
  fourthAlpha:any;
  constructor(private loginService:LoginService,private cartService:CartService,private router:Router) { }

  ngOnInit(): void {  
    this.generateCaptcha()
    this.getCartItem();
    this.getUser();
  }
  
  private getCartItem(){
    this.cartService.getCartItem().subscribe((data:any)=>{
    this.cartItems=data;
    this.cartItems.forEach(item=>{
      this.cartTotalPrice+=item.price;
      this.cartTotalItem+=item.quantity;
    })
    });
  }
  private getUser(){
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.user=data;
      return this.user;
    })
  }

generateCaptcha() {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
      'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < 4; i++) {
      this. firstAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
      this. secondAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
      this. thirdAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
      this. fourthAlpha = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  let test : any = document.getElementById("captcha") as HTMLInputElement | null
  let str = `${this.firstAlpha} ${this.secondAlpha} ${this.thirdAlpha} ${this.fourthAlpha} `;
  test.value = str  
}

checkValidCaptcha() {
  const captcha:any=document.getElementById("captcha") as HTMLInputElement | null;
  const captchaValue = captcha?.value;
  const captchaCode:any=document.getElementById("captchaCode") as HTMLInputElement | null;
  const captchaCodeValue=captchaCode?.value;
  const withoutSpaceCaptcha= captchaValue.replace(/\s/g, ''); 
if ( withoutSpaceCaptcha=== captchaCodeValue) {
    //  this.orderService.placeOrder(this.loginService.getUser()).subscribe(data=>{
    //   console.log('durga')
    //  },error=>console.log(error))
    //  return true;

    // this.orderService.placeOrder(this.loginService.getUser()).subscribe((data)=>{
    //   console.log('durga')
    //    },error=>console.log(error)) 
       Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Your work has been saved',
       })         
       this.router.navigate(['customer-home']) 
    return true;
  } else { 
      alert("Please enter a valid captcha.");
      return false;
  }
}

}
