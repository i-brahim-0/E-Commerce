import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.allProducts();
    this.allCategories();
  }
  allProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  allCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  filterByCat(event: any) {
    let value = event.target.value;
    if (value == 'all') {
      this.allProducts();
    } else this.getProductsByCat(value);
  }
  getProductsByCat(keyWord: string) {
    this.loading = true;
    this.service.getProductsCat(keyWord).subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
      },
      (erorr) => {
        this.loading = false;
        alert(erorr);
      }
    );
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let temp = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (temp) {
        alert('this product in cart already');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
