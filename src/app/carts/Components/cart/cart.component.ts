import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0;
  success: boolean = false;
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.getProductToCart();
  }
  getProductToCart() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.totalPriceCart();
  }

  totalPriceCart() {
    this.totalPrice = 0;
    for (let i in this.cartProducts) {
      this.totalPrice +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.totalPriceCart();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minAmount(index: number) {
    this.cartProducts[index].quantity--;
    this.totalPriceCart();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectInput() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  deleteProduct(i: number) {
    this.cartProducts.splice(i, 1);
    this.totalPriceCart();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart() {
    this.cartProducts = [];
    this.totalPriceCart();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  sendOrder() {
    let product = this.cartProducts.map((item) => {
      return {
        productid: item.item.id,
        quantity: item.quantity,
      };
    });
    let model = {
      userId: 5,
      date: new Date(),
      products: product,
    };
    this.service
      .sendProductsCart(model)
      .subscribe((res) => (this.success = true));
  }
}
