import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerTypeService} from "./customer-type.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private fb: FormBuilder, private router: Router, private customerTypeService: CustomerTypeService) {
    this.customerList.push({
        id: 1,
        name: 'Trương Ngọc Huyền',
        birthDay: '08/09/1997',
        gender: 'Nữ',
        idCard: '098787676',
        phoneNumber: "09889878",
        email: "huyen1997@gmail.com",
        customerType: customerTypeService.findById(1),
        address: 'Quảng Nam'
      },
      {
        id: 2,
        name: 'Lê Văn Bình',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: "09889878",
        email: "huyen1997@gmail.com",
        customerType: customerTypeService.findById(2),
        address: 'Quảng Nam'
      },
      {
        id: 3,
        name: 'Nguyễn Hoàng Sang',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: "09889878",
        email: "huyen1997@gmail.com",
        customerType: customerTypeService.findById(3),
        address: 'Quảng Nam'
      },
      {
        id: 4,
        name: 'Trần Văn Hải',
        birthDay: '08/09/1997',
        gender: "Nam",
        idCard: '098787676',
        phoneNumber: "09889878",
        email: "huyen1997@gmail.com",
        customerType: customerTypeService.findById(1),
        address: 'Quảng Nam'
      },
      {
        id: 5,
        name: 'Lê Thuận Đạt',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: "09889878",
        email: "huyen1997@gmail.com",
        customerType: customerTypeService.findById(3),
        address: 'Quảng Nam'
      }
    )
  }

  findById(id: number) {
    let index = this.customerList.findIndex(elementAt => elementAt.id == id);
    return this.customerList[index];
  }

  getCustomerList() {
    return this.customerList;
  }

  remove(id: number) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (id == this.customerList[i].id) {
        this.customerList.splice(i, 1);
      }
    }
  }

  add(customer: Customer) {
    customer.id = this.getId();
    this.customerList.push(customer);
    this.router.navigateByUrl('/customer');
  }

  getId() {
    if (this.customerList.length == 0) {
      return 1;
    } else {
      let id: number = 1;
      for (let customer of this.customerList) {
        if (customer.id != undefined && customer.id < id) {
          id = customer.id;
        }
      }
      return id++;
    }

  }

  edit() {
    // console.log(customerEdit);
    // let index = this.customerList.findIndex(elementAt => elementAt.id == customerEdit.id);
    // this.customerList[index] = customerEdit;
    this.router.navigateByUrl('customer');
  }
}
