import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  @ViewChild('inputNameProduct') inputNameProduct: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.builderFormProduct(new Product());
  }

  builderFormProduct(product: Product) {
    this.productForm = this.formBuilder.group({
      name: [product.name, Validators.required],
      price: [product.price, Validators.required],
    });
  }

  saveProduct() {
    console.log(this.productForm.value);
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
