import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerService} from '../../customer/customer-service.service';
import {FacilityService} from '../../facility/facility.service';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit, OnChanges {
  contractList: [] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  contractForm: FormGroup | any;
  submit = false;

  constructor(private fb: FormBuilder, private facilityService: FacilityService, private customerTypeService: CustomerTypeService,
              private customerService: CustomerService, private contractService: ContractService) {
    this.customerList = customerService.getCustomerList();
    this.facilityList = facilityService.getAll();
    this.contractList = contractService.getAll();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
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
      document.getElementById('closeModalButton').click();
      const contract = this.contractForm.value;
      contract.customer = this.customerService.findById(parseInt(this.contractForm.value.customer));
      contract.facility = this.facilityService.findById(parseInt(this.contractForm.value.facility));
      this.contractService.add(contract);
      this.contractList = this.contractService.getAll();
      // tslint:disable-next-line:no-unused-expression
      this.contractForm.reset();
    }
  }
}
