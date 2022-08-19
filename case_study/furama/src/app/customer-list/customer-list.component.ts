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
  customerDelete: Customer | any;

  constructor(private customerService: CustomerService) {
    this.customerList = this.customerService.getCustomerList();
  }

  ngOnInit(): void {
  }

  showModal(item: Customer) {
    this.customerDelete = item;
  }

  deleteCustomer() {
    if (this.customerDelete.id != null) {
      this.customerService.remove(this.customerDelete.id);
    }
  }
}
