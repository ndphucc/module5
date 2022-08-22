import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id).subscribe(next => {
        const product = next;
        this.productForm = new FormGroup({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
        });
      });
    });
  }

  ngOnInit() {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number): void {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }
}

