import {Injectable} from '@angular/core';
import {CustomerType} from "../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [];

  constructor() {
    this.customerTypeList.push(
      {
        id: 1,
        name: 'Diamond'
      },
      {
        id: 2,
        name: 'Platinum'
      },
      {
        id: 3,
        name: 'Gold'
      },
      {
        id: 4,
        name: 'Silver'
      },
      {
        id: 5,
        name: 'Member'
      },
    )
  }

  getAll() {
    return this.customerTypeList;
  }

  findById(id: number): any {
    for (let i = 0; i < this.customerTypeList.length; i++) {
      if (id == this.customerTypeList[i].id) {
        return this.customerTypeList[i];
      }
    }
  }
}
