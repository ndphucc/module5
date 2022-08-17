import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [];

  constructor() {
    this.customerList.push({
        id: 1,
        name: 'Trương Ngọc Huyền',
        birthDay: '08/09/1997',
        gender: false,
        idCard: '098787676',
        numberPhone: "09889878",
        email: "huyen1997@gmail.com",
        customerType: "Daimond",
        address: 'Quảng Nam'
      },
      {
        id: 2,
        name: 'Lê Văn Bình',
        birthDay: '08/09/1997',
        gender: false,
        idCard: '098787676',
        numberPhone: "09889878",
        email: "huyen1997@gmail.com",
        customerType: "Daimond",
        address: 'Quảng Nam'
      },
      {
        id: 3,
        name: 'Nguyễn Hoàng Sang',
        birthDay: '08/09/1997',
        gender: false,
        idCard: '098787676',
        numberPhone: "09889878",
        email: "huyen1997@gmail.com",
        customerType: "Daimond",
        address: 'Quảng Nam'
      },
      {
        id: 4,
        name: 'Trần Văn Hải',
        birthDay: '08/09/1997',
        gender: false,
        idCard: '098787676',
        numberPhone: "09889878",
        email: "huyen1997@gmail.com",
        customerType: "Daimond",
        address: 'Quảng Nam'
      },
      {
        id: 5,
        name: 'Lê Thuận Đạt',
        birthDay: '08/09/1997',
        gender: false,
        idCard: '098787676',
        numberPhone: "09889878",
        email: "huyen1997@gmail.com",
        customerType: "Daimond",
        address: 'Quảng Nam'
      }
    )
  }

  getCustomerList() {
    return this.customerList;
  }
  add(customer:Customer){
    this.customerList.push(customer)
  }

}
