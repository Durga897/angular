import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!: number;
  product:Product=new Product();
  public today = Date.now()
  constructor(private productService:ProductService,private cartService:CartService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>{
      this.product=data;
    },error=>console.log(error));
  }

  getProductById(id:number){
    // this.router.navigate(['seller/edit-product',id]);
    this.router.navigate(['order-product',id])
  }

  getDeliveryDate():Date { //pass in the relative end date reference
    var deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() +9);
    return deliveryDate
  }
  addToCarts(ids:number){
       this.cartService.addToCarts(ids).subscribe(data=>{
        this.router.navigate(['cart'])
       },error=>console.log(error)
       )

    // this.route.snapshot.params['ids'];
    // this.cartService.addToCarts(ids).subscribe((data:any)=>{
    //   this.router.navigate(['cart'])
    // })
  }
}
function getUTCDate(arg0: Date) {
  throw new Error('Function not implemented.');
}

