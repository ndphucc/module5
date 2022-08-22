import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer-service.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerDelete: Customer;

  constructor(private customerService: CustomerService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(): void {
    this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    });
  }

  showModal(item: Customer) {
    this.customerDelete = item;
  }

  deleteCustomer() {
    this.customerService.remove(this.customerDelete.id).subscribe(paramMap => {
      this.getAll();
    });
  }
}
