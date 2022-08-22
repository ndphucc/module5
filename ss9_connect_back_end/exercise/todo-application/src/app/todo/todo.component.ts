import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    // tslint:disable-next-line:prefer-const
    let todo: Todo;
    this.todoService.findById(i).subscribe(next => {
      todo = next;
      this.todoService.toggleTodo(todo).subscribe(todoa => {
        console.log(todo);
        this.getAll();
      });
    });
  }

  getAll() {
    this.todoService.getAll().subscribe(next => {
      this.todos = next;
    });
  }

  change() {
    const value = this.content.value;
    if (value) {
      this.todoService.add(value).subscribe(next => {
        this.getAll();
      });
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(next => {
      this.getAll();
    });
  }
}
