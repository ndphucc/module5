import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer-service.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];

  constructor(private customerService:CustomerService) {
      this.getCustomerList();
  }
  getCustomerList(){
    this.customerList = this.customerService.getCustomerList();
  }
  ngOnInit(): void {
  }

}
