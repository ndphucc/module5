import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:8080/api/customer/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {

  }

  findById(id: number) {
    return this.http.get<Customer>(API_URL + id);
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + 'list');
  }

  remove(id: number): Observable<Customer> {
    return this.http.delete<Customer>(API_URL + id);
  }

  add(customer: Customer) {
    return this.http.post<Customer>(API_URL + 'add', customer);
  }

  edit(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(API_URL + 'edit', customer);
  }
}
