import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  item: any = {};
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getDetailsProduct();
  }
  getDetailsProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.item = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
}
