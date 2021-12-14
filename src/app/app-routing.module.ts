import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CreateProductComponent } from './views/product/create-product/create-product.component';
import { DisplayProductComponent } from './views/product/display-product/display-product.component';
import { ProductDetailsComponent } from './views/product/product-details/product-details.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'product-create',
    component: CreateProductComponent,
  },
  {
    path: 'list-products',
    component: DisplayProductComponent,
  },
  {
    path: 'list-products/product-details/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
