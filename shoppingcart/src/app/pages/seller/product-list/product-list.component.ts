import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 products: Product[] = [];
  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  //  Product = Array<{ id: number; name: string,color:string,price:number,stock:number,description:string }>;
private getProducts(){
  this.productService.getProductList().subscribe(data=>{
  this.products=data;
  });
}
updateProduct(id:number){
  // this.router.navigate(['seller/edit-product',id]);
  this.router.navigate(['seller/edit-product',id])
}

}
