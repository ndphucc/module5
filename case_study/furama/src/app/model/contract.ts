import {Customer} from "./customer";
import {Facility} from "./Facility";

export interface Contract {
  id: number;
  customer: Customer;
  facility: Facility;
  startDate: string;
  endDate: string;
  deposit: number;
}
