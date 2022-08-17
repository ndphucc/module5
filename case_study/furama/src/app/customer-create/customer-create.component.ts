import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomerService} from "../service/customer-service.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {};
  customerForm = new FormGroup({});

  constructor(customerService: CustomerService) {
     this.customerForm = new FormGroup({
       id = [ '',],
       name?:string;
       birthDay?:string;
       gender?:boolean;
       idCard?:string;
       numberPhone?:string;
       email?:string;
       customerType?:string;
       address?:string;
     })
  }

  ngOnInit(): void {
  }

}
