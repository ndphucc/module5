import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenhAn} from '../model/benh-an';

const API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<BenhAn[]> {
    return this.http.get<BenhAn[]>(API_URL + 'benhAn');
  }

  findById(id: string): Observable<BenhAn> {
    return this.http.get<BenhAn>(API_URL + 'benhAn/' + id);
  }

  update(benhAn: BenhAn): Observable<BenhAn> {
    return this.http.put<BenhAn>(API_URL + 'benhAn/' + benhAn.id, benhAn);
  }

  delete(id: string): Observable<BenhAn> {
    return this.http.delete<BenhAn>(API_URL + 'benhAn/' + id);
  }
}
