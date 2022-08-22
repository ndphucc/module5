import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CustomerService} from '../customer/customer-service.service';
import {CustomerTypeService} from '../service/customer-type.service';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerEdit: Customer | any;
  customerTypeList: CustomerType[] = [];
  customerForm: FormGroup | any;
  submit = false;

  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder, private customerTypeService: CustomerTypeService) {
    this.customerTypeList = customerTypeService.getAll();
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.customerEdit = this.customerService.findById(parseInt(paraMap.get('id')));
    });
    const customerType = this.customerEdit.customerType;
    this.customerForm = this.fb.group({
      name: ['', [Validators.pattern('^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+(\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]+)*$'), Validators.required]],
      birthDay: ['', Validators.required],
      gender: ['', Validators.required],
      idCard: ['', this.idCardValidator],
      phoneNumber: ['', this.phoneValidator],
      email: ['', [Validators.required, Validators.email]],
      customerType: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.customerForm.patchValue(this.customerEdit);
    console.log(this.customerEdit);
    this.customerForm.patchValue({customerType: this.customerEdit.customerType.id});
  }

  onSubmit() {
    this.submit = true;
    if (this.customerForm.valid) {
      this.customerEdit = this.customerForm.value;
      this.customerEdit.customerType = this.customerTypeService.findById(parseInt(this.customerForm.value.customerType));
      this.customerService.edit();
    }
  }

  nameValidator(formControl: FormControl) {
    const nameRegex = new RegExp('^[A-Z][a-z]');
    if (nameRegex.test(formControl.value)) {
      return null;
    } else {
      return {nameValidator: true};
    }
  }

  idCardValidator(formControl: AbstractControl) {
    const idCardRegex = new RegExp('[0-9]{9,11}');
    if (idCardRegex.test(formControl.value)) {
      return null;
    } else {
      return {idCardValidator: true};
    }
  }

  phoneValidator(formControl: AbstractControl) {
    const phoneRegex = new RegExp('(090|091)[0-9]{7}');
    if (phoneRegex.test(formControl.value)) {
      return null;
    } else {
      return {phoneValidator: true};
    }
  }

}
