import {FacilityType} from './facilityType';
import {RentType} from './rent-type';

export interface Facility {
  id: number;
  facilityType: FacilityType;
  name: string;
  area: number;
  cost: number;
  maxPeople: number;
  rentType: RentType;
  standardRoom: string;
  description: string;
  poolArea: number;
  numberFloors: number;
  facilityFree: string;
  img: string;
}
