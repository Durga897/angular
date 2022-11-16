import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id!: number;
  product:Product=new Product();
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe(data=>{
      this.product=data;
    },error=>console.log(error));
  }
onSubmit(){
  this.productService.updateProduct(this.product).subscribe(data=>{
    this.router.navigate(['/seller/product-list']);
  },error=>console.log(error))
}

}
