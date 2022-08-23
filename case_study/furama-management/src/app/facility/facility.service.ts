import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facility');
  }

  getPage(pageValue: number): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facility?_page=' + pageValue + '&_limit=6');
  }

  add(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facility', facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(API_URL + '/facility/' + id);
  }

  remove(id: number): Observable<Facility> {
    return this.http.delete<Facility>(API_URL + '/facility/' + id);
  }

  edit(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(API_URL + '/facility/' + facility.id, facility);
  }
}
