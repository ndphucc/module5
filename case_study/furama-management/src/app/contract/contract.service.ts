import {Injectable} from '@angular/core';
import {Contract} from '../model/contract';
import {CustomerService} from '../customer/customer-service.service';
import {FacilityService} from '../facility/facility.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
    contractList: Contract [] = [];

  constructor(private customerService: CustomerService, private facilityService: FacilityService) {
    // this.contractList.push(
    //   {
    //     id: 1,
    //     customer: customerService.findById(1),
    //     facility: facilityService.findById(1),
    //     startDate: '09/10/2019',
    //     endDate: '10/12/2019',
    //     deposit: 10000
    //   },
    //   {
    //     id: 2,
    //     customer: customerService.findById(2),
    //     facility: facilityService.findById(2),
    //     startDate: '09/10/2019',
    //     endDate: '10/12/2019',
    //     deposit: 10000
    //   },
    //   {
    //     id: 3,
    //     customer: customerService.findById(3),
    //     facility: facilityService.findById(3),
    //     startDate: '09/10/2019',
    //     endDate: '10/12/2019',
    //     deposit: 10000
    //   }
    // );
  }

  getTotal(contract: Contract) {
    return 1000001;
  }

  add(contract: Contract) {
    console.log(contract);
    contract.id = this.getId();
    this.contractList.push(contract);
  }

  getAll() {
    const result: [] = [];
    for (const contract of this.contractList) {
      const temp = [contract, this.getTotal(contract)];
      // @ts-ignore
      result.push(temp);
    }
    return result;
  }

  getId() {
    if (this.contractList.length === 0) {
      return 1;
    } else {
      let id = 1;
      for (const contract of this.contractList) {
        if (contract.id > id) {
          id = contract.id;
        }
      }
      return id + 1;
    }

  }
}
