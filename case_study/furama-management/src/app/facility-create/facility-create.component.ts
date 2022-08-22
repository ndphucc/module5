import {Component, DoCheck, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../model/facilityType';
import {RentType} from '../model/rent-type';
import {FacilityTypeService} from '../service/facility-type-service.service';
import {RentTypeService} from '../service/rent-type.service';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';

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
  customerTemp: string[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService, private facilityService: FacilityService) {
    this.showCreate = 1;
    this.facilityTypeList = this.facilityTypeService.getAll();
    this.rentTypeList = this.rentTypeService.getAll();
  }

  ngDoCheck(): void {
  }

  nameValidator(formControl: AbstractControl) {
    const nameRegex = new RegExp('^[A-Z][a-z]');
    if (nameRegex.test(formControl.value)) {
      return null;
    } else {
      return {nameValidator: true};
    }
  }

  changeFacilityType(value) {
    // tslint:disable-next-line:radix
    value = parseInt(value);
    if (this.showCreate === 1) {
      this.customerTemp[0] = this.formGroup.value.name;
      this.customerTemp[1] = this.formGroup.value.area;
      this.customerTemp[2] = this.formGroup.value.cost;
      this.customerTemp[3] = this.formGroup.value.maxPeople;
      this.customerTemp[4] = this.formGroup.value.rentType;
      this.customerTemp[5] = this.formGroup.value.standardRoom;
      this.customerTemp[6] = this.formGroup.value.description;
      this.customerTemp[7] = this.formGroup.value.poolArea;
      this.customerTemp[8] = this.formGroup.value.numberFloors;
    } else if (this.showCreate === 2) {
      this.customerTemp[0] = this.formGroup.value.name;
      this.customerTemp[1] = this.formGroup.value.area;
      this.customerTemp[2] = this.formGroup.value.cost;
      this.customerTemp[3] = this.formGroup.value.maxPeople;
      this.customerTemp[4] = this.formGroup.value.rentType;
      this.customerTemp[5] = this.formGroup.value.standardRoom;
      this.customerTemp[6] = this.formGroup.value.description;
      this.customerTemp[8] = this.formGroup.value.numberFloors;
    } else {
      this.customerTemp[0] = this.formGroup.value.name;
      this.customerTemp[1] = this.formGroup.value.area;
      this.customerTemp[2] = this.formGroup.value.cost;
      this.customerTemp[3] = this.formGroup.value.maxPeople;
      this.customerTemp[4] = this.formGroup.value.rentType;
      this.customerTemp[9] = this.formGroup.value.facilityFree;
    }
    if (value === 1) {
      console.log(1);
      this.formGroup = new FormGroup({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.customerTemp[0], this.nameValidator),
        area: new FormControl(this.customerTemp[1], Validators.required),
        cost: new FormControl(this.customerTemp[2], Validators.required),
        maxPeople: new FormControl(this.customerTemp[3], Validators.required),
        rentType: new FormControl(this.customerTemp[4], Validators.required),
        standardRoom: new FormControl(this.customerTemp[5], Validators.required),
        description: new FormControl(this.customerTemp[6], Validators.required),
        poolArea: new FormControl(this.customerTemp[7], [Validators.min(0), Validators.required]),
        numberFloors: new FormControl((this.customerTemp[8]), [Validators.min(0), Validators.required]),
      });
    } else if (value === 3) {
      console.log(3);
      this.formGroup = this.fb.group({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.customerTemp[0], this.nameValidator),
        area: new FormControl(this.customerTemp[1], Validators.required),
        cost: new FormControl(this.customerTemp[2], Validators.required),
        maxPeople: new FormControl(this.customerTemp[3], Validators.required),
        rentType: new FormControl(this.customerTemp[4], Validators.required),
        facilityFree: new FormControl(this.customerTemp[9], Validators.required)
      });
    } else {
      console.log(2);
      this.formGroup = this.fb.group({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.customerTemp[0], this.nameValidator),
        area: new FormControl(this.customerTemp[1], Validators.required),
        cost: new FormControl(this.customerTemp[2], Validators.required),
        maxPeople: new FormControl(this.customerTemp[3], Validators.required),
        rentType: new FormControl(this.customerTemp[4], Validators.required),
        standardRoom: new FormControl(this.customerTemp[5], Validators.required),
        description: new FormControl(this.customerTemp[6], Validators.required),
        numberFloors: new FormControl(this.customerTemp[8], [Validators.min(0), Validators.required]),
      });
    }
    this.showCreate = value;

  }

  onSubmit() {
    this.submit = true;
    if (this.formGroup.valid) {
      const facility: Facility = this.formGroup.value;
      facility.id = this.facilityService.getId();
      // tslint:disable-next-line:radix
      facility.facilityType = this.facilityTypeService.findById(parseInt(this.formGroup.value.facilityType));
      // tslint:disable-next-line:radix
      facility.rentType = this.rentTypeService.findById(parseInt(this.formGroup.value.rentType));
      facility.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCCTW6m38DgtNBxFB_fTN1kY0GPx2TBWSBw&usqp=CAU';
      this.facilityService.add(facility);
      // console.log(facility);
    }
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      facilityType: new FormControl(this.showCreate, Validators.required),
      name: new FormControl('', this.nameValidator),
      area: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      rentType: new FormControl('', Validators.required),
      standardRoom: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.min(0), Validators.required]),
      numberFloors: new FormControl('', [Validators.min(0), Validators.required]),
      // facilityFree: new FormControl('', Validators.required)
    });
    console.log(this.formGroup);
    this.customerTemp[0] = this.formGroup.value.name;
    this.customerTemp[1] = this.formGroup.value.area;
    this.customerTemp[2] = this.formGroup.value.cost;
    this.customerTemp[3] = this.formGroup.value.maxPeople;
    this.customerTemp[4] = this.formGroup.value.rentType;
    this.customerTemp[5] = this.formGroup.value.standardRoom;
    this.customerTemp[6] = this.formGroup.value.description;
    this.customerTemp[7] = this.formGroup.value.poolArea;
    this.customerTemp[8] = this.formGroup.value.numberFloors;
    // this.customerTemp[9] = this.formGroup.value.facilityFree;
  }

}

