import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FacilityType } from '../model/facilityType';
import {RentType} from '../model/rent-type';
import {FacilityTypeService} from '../service/facility-type-service.service';
import {RentTypeService} from '../service/rent-type.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit, DoCheck {
  formGroup: FormGroup | any;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  submit = false;
  showCreate: number;

  constructor(private fb: FormBuilder, private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService) {
    this.showCreate = 1;
    this.facilityTypeList = this.facilityTypeService.getAll();
    this.rentTypeList = this.rentTypeService.getAll();
  }

  ngDoCheck(): void {
    this.showCreate = this.formGroup.value.facilityType;
  }

  nameValidator(formControl: AbstractControl) {
    const nameRegex = new RegExp('^[A-Z][a-z]');
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
      facilityType: [this.showCreate, Validators.required],
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
  }

}

