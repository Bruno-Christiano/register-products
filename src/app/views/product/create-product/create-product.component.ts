import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  products: Array<Product> = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  @ViewChild('inputNameProduct') inputNameProduct: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.builderFormProduct(new Product());
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  builderFormProduct(product: Product) {
    this.productForm = this.formBuilder.group({
      name: [product.name, Validators.required],
      price: [product.price, Validators.required],
    });
  }

  saveProduct() {
    this.productService.createProduct(this.productForm.value).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open(`Product successfully created!`, 'x', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,
        });
      },
      (error) => console.log(error)
    );
    this.productForm.reset();
    this.inputNameProduct.nativeElement.focus();
  }

  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
}
