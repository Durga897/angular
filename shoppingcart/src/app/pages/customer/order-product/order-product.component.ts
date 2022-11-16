import { Component, OnInit } from '@angular/core';
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
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
 
  id!: number;
  user!: User;
  firstAlpha: any;
  secondAlpha: any;
  thirdAlpha:any;
  fourthAlpha:any;
  product:Product=new Product();
  
  constructor(private loginService:LoginService,private orderService:OrderService,private router:Router,private route:ActivatedRoute,private productService:ProductService,) { }
  
  ngOnInit(): void {
    this.getUser();
    this.generateCaptcha()
    this.id=this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>{
    this.product=data;
    },error=>console.log(error));
    
  }
  
  private getUser(){
    this.loginService.getCurrentUser().subscribe((data:any)=>{
      this.user=data;
      return this.user;
    })
  }

  // getProduct(){
  //   this.id=this.route.snapshot.params['id'];
  //   this.productService.getProduct(this.id).subscribe(data=>{
  //     this.product=data;
  //     return this.product;
  //     });
  // }
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

checkValidCaptcha(product:Product) {
  const captcha:any=document.getElementById("captcha") as HTMLInputElement | null;
  const captchaValue = captcha?.value;
  const captchaCode:any=document.getElementById("captchaCode") as HTMLInputElement | null;
  const captchaCodeValue=captchaCode?.value;
  const withoutSpaceCaptcha= captchaValue.replace(/\s/g, ''); 
if ( withoutSpaceCaptcha=== captchaCodeValue) {
    this.orderService.buyProduct(product).subscribe((data)=>{
       },error=>console.log(error)) 
       Swal.fire({
         icon: 'success',
         title: 'Your order has been placed',
         text:"shop continue"
       }) 
       this.router.navigate(['customer-home'])         
    return true;
  } else { 
      alert("Please enter a valid captcha.");
      return false;
  }
}

}
