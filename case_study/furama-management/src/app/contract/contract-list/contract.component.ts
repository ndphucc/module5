import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerService} from '../../customer/customer-service.service';
import {FacilityService} from '../../facility/facility.service';
import {ContractService} from '../contract.service';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contractList: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  contractForm: FormGroup | any;
  submit = false;

  constructor(private fb: FormBuilder, private facilityService: FacilityService, private customerTypeService: CustomerTypeService,
              private customerService: CustomerService, private contractService: ContractService) {
    this.getAll();
    this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    });
    this.facilityService.getAll().subscribe(next => {
      this.facilityList = next;
    });
  }

  getAll() {
    this.contractService.getAll().subscribe(next => {
      this.contractList = next;
    });
  }

  ngOnInit(): void {
    this.initFormContract();
  }

  initFormContract(): void {
    this.contractForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      deposit: ['', [Validators.required, Validators.min(0)]],
      customer: ['', Validators.required],
      facility: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.contractForm.valid) {
      const contract = this.contractForm.value;
      this.facilityService.findById(this.contractForm.value.facility).subscribe(facility => {
        contract.facility = facility;
        this.customerService.findById(this.contractForm.value.customer).subscribe(customer => {
          contract.customer = customer;
          console.log(contract);
          this.contractService.add(contract).subscribe(next => {
          document.getElementById('closeModalButton').click();
          contract.this.initFormContract();
          this.getAll();
          });
        });
      });
    }
  }
}
