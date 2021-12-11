import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ComponentsModule } from '../components/components.module';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { DisplayProductComponent } from './product/display-product/display-product.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    CreateProductComponent,
    DisplayProductComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [HomeComponent, ProductComponent],
})
export class ViewsModule {}
