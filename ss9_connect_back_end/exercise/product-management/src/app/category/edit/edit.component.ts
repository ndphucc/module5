import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categoryForm: FormGroup;
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit() {
  }

  getCategory(id: number) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        name: new FormControl(category.name),
      });
    });
  }

  updateCategory(id: number): void {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category).subscribe(() => {
      alert('Cập nhật thành công');
    });
  }

}
