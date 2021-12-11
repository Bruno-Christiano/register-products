import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss'],
})
export class DisplayProductComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  }

  inProgress() {
    alert('IN PROGRES...');
  }
}
