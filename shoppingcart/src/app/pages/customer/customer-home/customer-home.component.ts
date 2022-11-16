import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getAllAvailableProducts();
  }
  private getAllAvailableProducts(){
    this.productService.getAllAvailableProduct().subscribe(data=>{
    this.products=data;
    });
  }
  getProductById(id:number){
    // this.router.navigate(['seller/edit-product',id]);
    this.router.navigate(['product-details',id])
  }
}
