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
  account: Account;
  formGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', this.regexPass),
      country: new FormControl(),
      age: new FormControl('', this.regexAge),
      gender: new FormControl(),
      phone: new FormControl()
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
    if (control.value === this.formGroup.get('password')) {
      return null;
    } else {
      return {confirmPassword: true};
    }
  }

  onSubmit() {
    this.formGroup = this.fb.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', this.regexPass),
      country: new FormControl(),
      age: new FormControl('', this.regexAge),
      gender: new FormControl(),
      phone: new FormControl()
    });
  }
}
