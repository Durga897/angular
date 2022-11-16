import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,private snack:MatSnackBar) { }
  public formData = new FormData();
  selectedFile!: File;
  message!: string;
  public product={
    name:'',
    color:'',
    price:'',
    description:'',
    stock:'',
  }
  
  ngOnInit(): void {
  }
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }
  
  formSubmit(form :NgForm){
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('product',JSON.stringify(this.product))
    this.productService.addProduct(uploadImageData).subscribe(
      (data)=>{
        this.snack.open('product added sucessfully','',{duration:3000,verticalPosition:'top'});
        form.reset()
      },
     (error)=>{
      alert('something went to wrong');
     }  
    )  
}
}
