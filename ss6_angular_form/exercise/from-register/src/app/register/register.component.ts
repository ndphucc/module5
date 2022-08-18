import {Component, OnInit} from '@angular/core';
import {Account} from '../account';
import {AbstractControl, FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, Validators} from '@angular/forms';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  countryList = [
    'Hà Nội', 'Đà Nẵng', 'Sài Gòn'
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: new FormControl('', Validators.email),
      pCpGroup: this.fb.group({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl(''),
      }, this.regexPass),
      country: new FormControl(),
      age: new FormControl('', this.regexAge),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', this.phoneValidator)
    });
  }

  regexAge(control: AbstractControl) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const v = control.value;
    if (v < 18) {
      return {age: true};
    } else {
      return null;
    }
  }

  regexPass(control: AbstractControl) {
    if (control.value.password === control.value.confirmPassword) {
      return null;
    } else {
      return {confirmPassword: true};
    }
  }

  phoneValidator(form: AbstractControl) {
    const phoneRegex = new RegExp(/^\\+84\\d{9,10}$/);
    if (form.value.test(phoneRegex)) {
      return null;
    } else {
      return {phoneRegex: true};
    }
  }

  onSubmit() {
  }
}
