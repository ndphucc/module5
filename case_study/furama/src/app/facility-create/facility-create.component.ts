import {Component, OnChanges, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FacilityType} from "../model/facilityType";
import {FacilityTypeService} from "../service/facility-type-service.service";
import {RentType} from "../model/RentType";
import {RentTypeService} from "../service/rent-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  formGroup: FormGroup | any;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  submit = false;

  constructor(private fb: FormBuilder, private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService) {

  }

  nameValidator(formControl: AbstractControl) {
    let nameRegex = new RegExp('^[A-Z][a-z]');
    if (nameRegex.test(formControl.value)) {
      return null;
    } else {
      return {nameValidator: true};
    }
  }

  onSubmit() {
    this.submit = true;
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      facilityType: ['', Validators.required],
      name: ['', this.nameValidator],
      area: ['', Validators.required],
      cost: ['', Validators.required],
      maxPeople: ['', Validators.required],
      rentType: ['', Validators.required],
      standardRoom: ['', Validators.required],
      description: ['', Validators.required],
      poolArea: ['', [Validators.min(0), Validators.required]],
      numberFloors: ['', [Validators.min(0), Validators.required]],
      facilityFree: ['', Validators.required]
    });
    this.facilityTypeList = this.facilityTypeService.getAll();
    this.rentTypeList = this.rentTypeService.getAll();
  }

  numberValidator(formControl: AbstractControl) {
    // console.log(formControl.value.indexOf('.'));
    if (formControl.value.includes('.') || formControl.value.includes(',')) {
      return {numberValidator: true};
    } else {
      return null;
    }
  }

}

