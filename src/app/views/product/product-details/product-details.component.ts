import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productForm: FormGroup;
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.builderFormProduct();
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe((res) => {
      this.product = res;
      console.log(res);
    });
  }

  builderFormProduct() {
    this.productForm = this.formBuilder.group({
      name: [this.product?.name, Validators.required],
      price: [this.product?.price, Validators.required],
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe((res) => {
      console.log((this.product = res));
    });
  }

  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
}
