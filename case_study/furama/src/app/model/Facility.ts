import {RentType} from "./RentType";
import {FacilityType} from "./facilityType";

export interface Facility {
  id:number;
  facilityType:FacilityType;
  name:string;
  area:number;
  cost:number;
  maxPeople:number;
  rentType:RentType;
  standardRoom:string;
  description:string;
  poolArea:number;
  numberFloors:number;
  facilityFree:string;
  img:string;
};
