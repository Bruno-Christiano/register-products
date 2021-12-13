import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
      console.log(res);
    });
  }

  deleteProduct(id: number) {
    this.productService.removeProduct(id).subscribe(
      (res) => {
        console.log('removed!');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
