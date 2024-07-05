import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  sendProductsCart(model: any) {
    return this.http.post(environment.baseApi + 'carts', model);
  }
}
