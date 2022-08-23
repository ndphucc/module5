import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer-service.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer | any;
  customerTypeList: CustomerType[] = [];
  customerForm: FormGroup | any;
  submit = false;

  // tslint:disable-next-line:max-line-length
  constructor(private toastr: ToastrService, private fb: FormBuilder, private customerService: CustomerService, private customerTypeService: CustomerTypeService, private router: Router) {
    this.getCustomerType();
    console.log(router.url);
  }

  getCustomerType() {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
  }

  onSubmit() {
    this.submit = true;
    console.log(this.customerForm);
    if (this.customerForm.valid) {
      this.customer = this.customerForm.value;
      this.customerTypeService.findById(+this.customerForm.value.customerType).subscribe(next => {
        this.customer.customerType = next;
        this.customerService.add(this.customer).subscribe(success => {
          this.toastr.success('Thêm mới thành công', '');
          this.router.navigateByUrl('/customer/list');
        });
      });
    }

  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
        '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
        '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
        '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+'), Validators.required]],
      birthDay: ['', Validators.required],
      gender: ['', Validators.required],
      idCard: ['', this.idCardValidator],
      phoneNumber: ['', this.phoneValidator],
      email: ['', [Validators.required, Validators.email]],
      customerType: ['', Validators.required],
      address: ['', Validators.required],
    });
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
