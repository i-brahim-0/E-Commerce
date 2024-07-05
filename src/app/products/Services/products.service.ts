import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseApi + 'products/categories');
  }
  getProductById(id: any) {
    return this.http.get(environment.baseApi + 'products/' + id);
  }

  getProductsCat(keyWord: string) {
    return this.http.get(environment.baseApi + 'products/category/' + keyWord);
  }
}
