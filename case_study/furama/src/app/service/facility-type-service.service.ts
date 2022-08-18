import {Injectable} from '@angular/core';
import {FacilityType} from "../model/facilityType";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypeList: FacilityType[] = []

  constructor() {
    this.facilityTypeList.push(
      {
        id: 1,
        name: 'Villa'
      },
      {
        id: 2,
        name: 'House'
      },
      {
        id: 3,
        name: 'Room'
      }
    )
  }

  getAll() {
    return this.facilityTypeList;
  }

  findById(id: number) {
    for (let item of this.facilityTypeList) {
      if (id === item.id) {
        return item;
      }
    }
    return null;
  }
}
