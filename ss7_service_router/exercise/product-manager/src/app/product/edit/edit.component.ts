import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      const product = this.productService.findById(parseInt(pramMap.get('id')));
      this.productForm = this.fb.group({
        id: [product.id],
        name: [product.name],
        price: [product.price],
        description: [product.description],
      });
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.update(product);
  }

}
