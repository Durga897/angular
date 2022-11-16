import { Component, OnInit,Input, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Cartitem } from 'src/app/cartitem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() listIndex!: number;
  cartItems: Cartitem[] = [];
  cartTotal=0;
  cartTotalItem=0;
  
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.getCartItem();
  }
  
  private getCartItem(){
    this.cartService.getCartItem().subscribe((data:any)=>{
    this.cartItems=data;
    this.cartItems.forEach(item=>{
      this.cartTotal+=item.price;
      this.cartTotalItem+=item.quantity;
    })
    });
}


increaseCartItemQuantity(ids:number){
    this.cartService.increaseCartItemQuantity(ids).subscribe(()=>{
     this.router.navigate(['cart'])
    },error=>console.log(error)
    )    
 // this.route.snapshot.params['ids'];
 // this.cartService.addToCarts(ids).subscribe((data:any)=>{
 //   this.router.navigate(['cart'])
 // })
}

decreaseCartItemQuantity(ids:number){
  this.cartService.decreaseCartItemQuantity(ids).subscribe(()=>{
   this.router.navigate(['cart'])
  },error=>console.log(error)
  )    
// this.route.snapshot.params['ids'];
// this.cartService.addToCarts(ids).subscribe((data:any)=>{
//   this.router.navigate(['cart'])
// })
}

getDeliveryDate():Date { //pass in the relative end date reference
  var deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() +9);
  return deliveryDate
}

  removeCartItem(ids:number){
    this.cartService.removeCartItem(ids).subscribe(()=>{
     this.router.navigate(['cart'])
    },error=>console.log(error)
    )    
 // this.route.snapshot.params['ids'];
 // this.cartService.addToCarts(ids).subscribe((data:any)=>{
 //   this.router.navigate(['cart'])
 // })
}
}

  // this.id=this.route.snapshot.params['id'];
  //   this.productService.getProduct(this.id).subscribe(data=>{
  //     this.product=data;
  //   },error=>console.log(error));


   


