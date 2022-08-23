import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {CustomerService} from '../customer/customer-service.service';
import {FacilityService} from '../facility/facility.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient, private customerService: CustomerService, private facilityService: FacilityService) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contract');
  }

  getTotal(contract: Contract) {
    return 1000001;
  }

  add(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contract', contract);
  }
}
