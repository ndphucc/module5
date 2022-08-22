import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../service/customer-type.service';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor(private fb: FormBuilder, private router: Router, private customerTypeService: CustomerTypeService) {
    this.customerList.push({
        id: 1,
        name: 'Trương Ngọc Huyền',
        birthDay: '1009-01-01',
        gender: 'Nữ',
        idCard: '098787676',
        phoneNumber: '09889878',
        email: 'huyen1997@gmail.com',
        customerType: customerTypeService.findById(1),
        address: 'Quảng Nam'
      },
      {
        id: 2,
        name: 'Lê Văn Bình',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: '09889878',
        email: 'huyen1997@gmail.com',
        customerType: customerTypeService.findById(2),
        address: 'Quảng Nam'
      },
      {
        id: 3,
        name: 'Nguyễn Hoàng Sang',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: '09889878',
        email: 'huyen1997@gmail.com',
        customerType: customerTypeService.findById(3),
        address: 'Quảng Nam'
      },
      {
        id: 4,
        name: 'Trần Văn Hải',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: '09889878',
        email: 'huyen1997@gmail.com',
        customerType: customerTypeService.findById(1),
        address: 'Quảng Nam'
      },
      {
        id: 5,
        name: 'Lê Thuận Đạt',
        birthDay: '08/09/1997',
        gender: 'Nam',
        idCard: '098787676',
        phoneNumber: '09889878',
        email: 'huyen1997@gmail.com',
        customerType: customerTypeService.findById(3),
        address: 'Quảng Nam'
      }
    );
  }

  findById(id: number) {
    const index = this.customerList.findIndex(elementAt => elementAt.id === id);
    return this.customerList[index];
  }

  getCustomerList() {
    return this.customerList;
  }

  remove(id: number) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (id === this.customerList[i].id) {
        this.customerList.splice(i, 1);
      }
    }
  }

  add(customer: Customer) {
    customer.id = this.getId();
    console.log(customer);
    this.customerList.push(customer);
    this.router.navigateByUrl('/customer');
    console.log(this.customerList);
  }

  getId(): number {
    if (this.customerList.length === 0) {
      return 1;
    } else {
      let id = 1;
      for (const customer of this.customerList) {
        console.log(customer);
        if (customer.id > id) {
          id = customer.id;
        }
      }
      return id + 1;
    }

  }

  edit() {
    this.router.navigateByUrl('customer');
  }
}
