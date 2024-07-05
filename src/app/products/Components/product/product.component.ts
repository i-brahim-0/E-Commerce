import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() item: any = {};
  @Output() itemChose = new EventEmitter();
  addBtn: boolean = false;
  amount: number = 0;
  ngOnInit(): void {}
  add() {
    this.itemChose.emit({ item: this.item, quantity: this.amount });
  }
}
