import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {Customer} from "../model/customer";
import {Facility} from "../model/Facility";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];

  constructor() {
    this.contractList.push(
      {
        id: 1,
        customer: {
          id: 1,
          name: 'Nguyễn Hoàng Sang',
          birthDay: '08/09/1997',
          gender: false,
          idCard: '098787676',
          numberPhone: "09889878",
          email: "huyen1997@gmail.com",
          customerType: "Daimond",
          address: 'Quảng Nam'
        },
        facility: {
          id: 11,
          facilityType: {id: 1, name: 'Villa'},
          name: 'Villa Beach Front',
          area: 25000,
          cost: 10000000,
          maxPeople: 10,
          rentType: {id: 1, name: 'year'},
          standardRoom: 'vip',
          description: 'Có hồ bơi',
          poolArea: 500,
          numberFloors: 4,
          facilityFree: 'Có Điện Thoại',
          img: 'https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768'
        },
        startDate: "22/08/2020",
        endDate: "22/08/2021",
        deposit: 20000,
      },
      {
        id: 2,
        customer: {
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
        facility: {
          id: 11,
          facilityType: {id: 1, name: 'Villa'},
          name: 'Villa Beach Front',
          area: 25000,
          cost: 10000000,
          maxPeople: 10,
          rentType: {id: 1, name: 'year'},
          standardRoom: 'vip',
          description: 'Có hồ bơi',
          poolArea: 500,
          numberFloors: 4,
          facilityFree: 'Có Điện Thoại',
          img: 'https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768'
        },
        startDate: "22/08/2020",
        endDate: "22/08/2021",
        deposit: 20000,
      },
      {
        id: 3,
        customer: {
          id: 1,
          name: 'Trần Văn Hải',
          birthDay: '08/09/1997',
          gender: false,
          idCard: '098787676',
          numberPhone: "09889878",
          email: "huyen1997@gmail.com",
          customerType: "Daimond",
          address: 'Quảng Nam'
        },
        facility: {
          id: 11,
          facilityType: {id: 1, name: 'Villa'},
          name: 'Villa Beach Front',
          area: 25000,
          cost: 10000000,
          maxPeople: 10,
          rentType: {id: 1, name: 'year'},
          standardRoom: 'vip',
          description: 'Có hồ bơi',
          poolArea: 500,
          numberFloors: 4,
          facilityFree: 'Có Điện Thoại',
          img: 'https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768'
        },
        startDate: "22/08/2020",
        endDate: "22/08/2021",
        deposit: 20000,
      },
    )
  }

  ngOnInit(): void {
  }

}
