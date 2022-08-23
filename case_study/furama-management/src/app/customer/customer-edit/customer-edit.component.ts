import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../customer-service.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  idCustomer: number;
  customerEdit: Customer | any;
  customerTypeList: CustomerType[] = [];
  customerForm: FormGroup | any;
  submit = false;

  // tslint:disable-next-line:max-line-length
  constructor(private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private fb: FormBuilder, private customerTypeService: CustomerTypeService) {
    this.getCustomerType();
  }

  getCustomerType(): void {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    });
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
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.customerEdit = this.customerService.findById(+paraMap.get('id')).subscribe(next => {
        this.customerEdit = next;
        this.idCustomer = this.customerEdit.id;
        this.customerForm.patchValue(this.customerEdit);
        this.customerForm.patchValue({customerType: this.customerEdit.customerType.id});
      });
    });
  }

  onSubmit() {
    this.submit = true;
    if (this.customerForm.valid) {
      this.customerEdit = this.customerForm.value;
      console.log(this.customerEdit);
      this.customerTypeService.findById(+this.customerForm.value.customerType).subscribe(next => {
        this.customerEdit.customerType = next;
        this.customerEdit.id = this.idCustomer;
        this.customerService.edit(this.customerEdit).subscribe(success => {
          this.toastr.success('Sửa thành công');
          this.router.navigateByUrl('/customer/list');
        });
      });
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
