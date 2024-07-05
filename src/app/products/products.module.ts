import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, BrowserModule, SharedModule, RouterLink],
})
export class ProductsModule {}
