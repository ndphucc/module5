import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoComponent} from '../todo/todo.component';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  toggleTodo(todo: Todo): Observable<Todo> {
    todo.complete = !todo.complete;
    return this.http.put<Todo>('http://localhost:3000/todo/' + todo.id, todo);
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todo');
  }

  add(value: string): Observable<Todo> {
    const todo: Todo = {
      content: value,
      complete: false
    };
    return this.http.post<Todo>('http://localhost:3000/todo/', todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3000/todo/' + id);
  }

  delete(id: number): Observable<Todo> {
      return this.http.delete<Todo>('http://localhost:3000/todo/' + id);
  }
}
