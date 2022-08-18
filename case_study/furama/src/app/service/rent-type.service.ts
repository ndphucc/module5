import {Injectable} from '@angular/core';
import {RentType} from "../model/RentType";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypeList: RentType[] = []

  constructor() {
    this.rentTypeList.push(
      {
        id: 1,
        name: 'Year'
      },
      {
        id: 2,
        name: 'Month'
      },
      {
        id: 3,
        name: 'Day'
      },
      {
        id: 4,
        name: 'hours'
      },
    )
  }

  getAll() {
    return this.rentTypeList;
  }

  findById(id: number) {
    for (let item of this.rentTypeList) {
      if (id === item.id) {
        return item;
      }
    }
    return null;
  }
}
