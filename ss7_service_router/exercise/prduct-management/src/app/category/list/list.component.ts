import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category: Category;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  delete() {
    this.categoryService.deleteCategory(this.category.id);
  }

  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

}
