import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer-service.service";
import {Customer} from "../model/customer";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {};
  customerForm: FormGroup | any;
  submit: boolean = false;

  constructor(private fb: FormBuilder, private customerService: CustomerService) {

  }

  onSubmit() {
    this.submit = true;
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customer = {
        name: this.customerForm.value.name,
        birthDay: this.customerForm.value.birthDay,
        gender: this.customerForm.value.gender,
        idCard: this.customerForm.value.idCard,
        phoneNumber: this.customerForm.value.phoneNumber,
        email: this.customerForm.value.email,
        customerType: this.customerForm.value.customerType,
        address: this.customerForm.value.address,
      };
      this.customerService.add(this.customer);
    }

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [this.nameValidator, Validators.required]],
      birthDay: ['', Validators.required],
      gender: ['Nữ', Validators.required],
      idCard: ['', this.idCardValidator],
      phoneNumber: ['', this.phoneValidator],
      email: ['', [Validators.required, Validators.email]],
      customerType: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  nameValidator(formControl: FormControl) {
    let nameRegex = new RegExp('^[A-Z][a-z]');
    if (nameRegex.test(formControl.value)) {
      return null;
    } else {
      return {nameValidator: true};
    }
  }

  idCardValidator(formControl: AbstractControl) {
    let idCardRegex = new RegExp('[0-9]{9,11}');
    if (idCardRegex.test(formControl.value)) {
      return null;
    } else {
      return {idCardValidator: true};
    }
  }

  phoneValidator(formControl: AbstractControl) {
    let phoneRegex = new RegExp('(090|091)[0-9]{7}');
    if (phoneRegex.test(formControl.value)) {
      return null;
    } else {
      return {phoneValidator: true};
    }
  }
}
