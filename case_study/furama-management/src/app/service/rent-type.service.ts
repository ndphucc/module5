import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RentType} from '../model/rent-type';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<RentType[]> {
    return this.http.get<RentType[]>(API_URL + '/rentType');
  }

  findById(id: number): Observable<RentType> {
    return this.http.get<RentType>(API_URL + '/rentType/' + id);
  }
}
