import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  product: Product;
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  delete(): void {
    this.productService.deleteProduct(this.product.id);
  }

  getDelete(item: Product): void {
    this.product = item;
  }

  getAll(): void {
    this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }

}
