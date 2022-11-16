import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private imageService: ImageService,private loginService:LoginService,private httpClient:HttpClient) { }
  public formData = new FormData();
  selectedFile!: File;
  message!: string;
  user:User=new User()
  userss:User=this.getUser();
  public product={
        name:'keyboard',
        color:'black',
        price:20000,
        description:'This is the keyboard',
        stock:300,
        user:this.userss,
      }
  ngOnInit() {
  }

public onFileChanged(event:any) {
  this.selectedFile = event.target.files[0];
}

onUpload() {
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
  uploadImageData.append('product',JSON.stringify(this.product))
  this.httpClient.post('http://localhost:8080/product/save/',uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
}

// + `/upload?file=${file.name}`;
//   public product={
//     id:0,
//     name:'Laptop',
//     color:'black',
//     price:20000,
//     description:'This is the laptop',
//     stock:300,
//     user:this.userss,
//   }
 
  getUser():User{
          this.loginService.getCurrentUser().subscribe ((data:any)=>{
          this.userss=data; })
         return this.userss;
      }
  
//   this.login.getCurrentUser().subscribe ((data:any)=>{
//     this.user=data;})
// }

}
