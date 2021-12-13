import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly baseUrl: string =
    'https://app-register-product.herokuapp.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const url = this.baseUrl;
    return this.http.get<Product[]>(url);
  }

  createProduct(product: Product): Observable<Product> {
    const url = this.baseUrl;
    return this.http.post<Product>(url, product);
  }

  updateProduct(id: number, prodcut: Product): Observable<Product> {
    const url = `${this.baseUrl} / ${id}, ${prodcut}`;
    return this.http.put<Product>(url, prodcut);
  }

  removeProduct(id: number): Observable<Product> {
    const url = `${this.baseUrl} / ${id}`;
    return this.http.delete<Product>(url);
  }
}
