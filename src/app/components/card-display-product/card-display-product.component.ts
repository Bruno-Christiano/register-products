import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card-display-product',
  templateUrl: './card-display-product.component.html',
  styleUrls: ['./card-display-product.component.scss'],
})
export class CardDisplayProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  @Input() products: Product[];
  @Output() removeProductChild = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteProduct(id: any) {
    this.removeProductChild.emit(id);
  }
}
