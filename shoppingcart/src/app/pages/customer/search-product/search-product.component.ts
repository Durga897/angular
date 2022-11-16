import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  products: Product[] = [];
  name!: string;
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.name=this.route.snapshot.params['name'];
    this.productService.findProduct(this.name).subscribe(data=>{
      this.products=data;
    },error=>console.log(error));

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
