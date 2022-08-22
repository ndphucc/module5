import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facilityType';
import {RentType} from '../../model/rent-type';
import {FacilityTypeService} from '../../service/facility-type-service.service';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityService} from '../facility.service';
import {Facility} from '../../model/facility';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  formGroup: FormGroup | any;
  facility: Facility;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  submit = false;
  showCreate: number;
  idFacility: number;

  constructor(private fb: FormBuilder, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService, private facilityService: FacilityService, private activeRouter: ActivatedRoute) {
    this.facilityTypeList = this.facilityTypeService.getAll();
    this.rentTypeList = this.rentTypeService.getAll();
    activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.idFacility = parseInt(paramMap.get('id'));
      // tslint:disable-next-line:radix
      this.facility = facilityService.findById(this.idFacility);
      this.showCreate = this.facility.facilityType.id;
      this.formGroup = this.fb.group({
        facilityType: [this.showCreate, Validators.required],
        name: [this.facility.name, this.nameValidator],
        area: [this.facility.area, Validators.required],
        cost: [this.facility.cost, Validators.required],
        maxPeople: [this.facility.maxPeople, Validators.required],
        rentType: [this.facility.rentType.id, Validators.required],
        standardRoom: [this.facility.standardRoom, Validators.required],
        description: [this.facility.description, Validators.required],
        poolArea: [this.facility.poolArea, [Validators.min(0), Validators.required]],
        numberFloors: [this.facility.numberFloors, [Validators.min(0), Validators.required]],
        facilityFree: [this.facility.facilityFree, Validators.required]
      });
    });
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
    this.showCreate = parseInt(value);
    if (this.showCreate === 1) {
      this.formGroup = this.fb.group({
        facilityType: [this.showCreate, Validators.required],
        name: [this.formGroup.value.name, this.nameValidator],
        area: [this.formGroup.value.area, Validators.required],
        cost: [this.formGroup.value.cost, Validators.required],
        maxPeople: [this.formGroup.value.maxPeople, Validators.required],
        rentType: [this.formGroup.value.rentType, Validators.required],
        standardRoom: [this.formGroup.value.standardRoom, Validators.required],
        description: [this.formGroup.value.description, Validators.required],
        poolArea: [this.formGroup.value.poolArea, [Validators.min(0), Validators.required]],
        numberFloors: [this.formGroup.value.numberFloors, [Validators.min(0), Validators.required]],
      });
    } else if (this.showCreate === 2) {
      this.formGroup = this.fb.group({
        facilityType: [this.showCreate, Validators.required],
        name: [this.formGroup.value.name, this.nameValidator],
        area: [this.formGroup.value.area, Validators.required],
        cost: [this.formGroup.value.cost, Validators.required],
        maxPeople: [this.formGroup.value.maxPeople, Validators.required],
        rentType: [this.formGroup.value.rentType, Validators.required],
        standardRoom: [this.formGroup.value.standardRoom, Validators.required],
        description: [this.formGroup.value.description, Validators.required],
        numberFloors: [this.formGroup.value.numberFloors, [Validators.min(0), Validators.required]],
      });
    } else {
      this.formGroup = this.fb.group({
        facilityType: [this.showCreate, Validators.required],
        name: [this.formGroup.value.name, this.nameValidator],
        area: [this.formGroup.value.area, Validators.required],
        cost: [this.formGroup.value.cost, Validators.required],
        maxPeople: [this.formGroup.value.maxPeople, Validators.required],
        rentType: [this.formGroup.value.rentType, Validators.required],
        facilityFree: [this.formGroup.value.facilityFree, Validators.required]
      });
    }
  }

  onSubmit() {
    // this.changeFacilityType(this.showCreate);
    this.submit = true;
    if (this.formGroup.valid) {
      this.facility = this.formGroup.value;
      // tslint:disable-next-line:radix
      this.facility.facilityType = this.facilityTypeService.findById(parseInt(this.formGroup.value.facilityType));
      // tslint:disable-next-line:radix
      this.facility.rentType = this.rentTypeService.findById(parseInt(this.formGroup.value.rentType));
      this.facility.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCCTW6m38DgtNBxFB_fTN1kY0GPx2TBWSBw&usqp=CAU';
      this.facility.id = this.idFacility;
      this.facilityService.edit(this.facility);
    }
  }

  ngOnInit(): void {
  }
}
