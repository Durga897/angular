import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  public baseUrl = 'http://localhost:8080/product/save';

  public uploadImage(formData: FormData,product:Product): Observable<any> {
    const file = formData.get('file') as File;
    const url = this.baseUrl + `/upload?file=${file.name}`;
    console.log(url);
    return this.httpClient.post(url, product);
  }

}