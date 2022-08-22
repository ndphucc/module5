import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  deleteProduct: Product;

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  getProductDelete(product: Product): void {
    this.deleteProduct = product;
  }

  remove() {
    this.productService.delete(this.deleteProduct.id);
  }

  ngOnInit(): void {
  }

}
