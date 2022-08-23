import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../model/facilityType';
import {RentType} from '../../model/rent-type';
import {FacilityTypeService} from '../../service/facility-type-service.service';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityService} from '../facility.service';
import {Facility} from '../../model/facility';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  idFacility: number;
  formGroup: FormGroup;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  submit = false;
  showCreate: number;
  facilityTemp: string[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService, private facilityService: FacilityService, private router: Router, private activateRouter: ActivatedRoute) {
    this.activateRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityService.findById(+paramMap.get('id')).subscribe(next => {
        const facility: Facility = next;
        this.idFacility = facility.id;
        this.showCreate = facility.facilityType.id;
        this.formGroup = this.fb.group({
          facilityType: new FormControl('', Validators.required),
          name: new FormControl('', [Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
            '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
            '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
            '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+'), Validators.required]),
          area: new FormControl('', Validators.required),
          cost: new FormControl('', Validators.required),
          maxPeople: new FormControl('', Validators.required),
          rentType: new FormControl('', Validators.required),
          standardRoom: new FormControl('', Validators.required),
          description: new FormControl('', Validators.required),
          poolArea: new FormControl('', [Validators.min(0), Validators.required]),
          numberFloors: new FormControl('', [Validators.min(0), Validators.required]),
          facilityFree: new FormControl('', Validators.required)
        });
        this.formGroup.patchValue(facility);
        this.formGroup.patchValue({rentType: facility.rentType.id});
        this.formGroup.patchValue({facilityType: this.showCreate});
        this.getFacilityType();
        this.getRentType();
        this.changeFacilityType(this.showCreate);
      });
    });
  }

  ngOnInit(): void {

  }

  getFacilityType() {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypeList = next;
    });
  }

  getRentType() {
    this.rentTypeService.getAll().subscribe(next => {
      this.rentTypeList = next;
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
    value = +value;
    if (this.showCreate === 1) {
      this.facilityTemp[0] = this.formGroup.value.name;
      this.facilityTemp[1] = this.formGroup.value.area;
      this.facilityTemp[2] = this.formGroup.value.cost;
      this.facilityTemp[3] = this.formGroup.value.maxPeople;
      this.facilityTemp[4] = this.formGroup.value.rentType;
      this.facilityTemp[5] = this.formGroup.value.standardRoom;
      this.facilityTemp[6] = this.formGroup.value.description;
      this.facilityTemp[7] = this.formGroup.value.poolArea;
      this.facilityTemp[8] = this.formGroup.value.numberFloors;
    } else if (this.showCreate === 2) {
      this.facilityTemp[0] = this.formGroup.value.name;
      this.facilityTemp[1] = this.formGroup.value.area;
      this.facilityTemp[2] = this.formGroup.value.cost;
      this.facilityTemp[3] = this.formGroup.value.maxPeople;
      this.facilityTemp[4] = this.formGroup.value.rentType;
      this.facilityTemp[5] = this.formGroup.value.standardRoom;
      this.facilityTemp[6] = this.formGroup.value.description;
      this.facilityTemp[8] = this.formGroup.value.numberFloors;
    } else {
      this.facilityTemp[0] = this.formGroup.value.name;
      this.facilityTemp[1] = this.formGroup.value.area;
      this.facilityTemp[2] = this.formGroup.value.cost;
      this.facilityTemp[3] = this.formGroup.value.maxPeople;
      this.facilityTemp[4] = this.formGroup.value.rentType;
      this.facilityTemp[9] = this.formGroup.value.facilityFree;
    }
    if (value === 1) {
      this.formGroup = this.fb.group({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.facilityTemp[0], [Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
          '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
          '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+'), Validators.required]),
        area: new FormControl(this.facilityTemp[1], Validators.required),
        cost: new FormControl(this.facilityTemp[2], Validators.required),
        maxPeople: new FormControl(this.facilityTemp[3], Validators.required),
        rentType: new FormControl(this.facilityTemp[4], Validators.required),
        standardRoom: new FormControl(this.facilityTemp[5], Validators.required),
        description: new FormControl(this.facilityTemp[6], Validators.required),
        poolArea: new FormControl(this.facilityTemp[7], [Validators.min(0), Validators.required]),
        numberFloors: new FormControl((this.facilityTemp[8]), [Validators.min(0), Validators.required]),
      });
    } else if (value === 3) {
      this.formGroup = this.fb.group({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.facilityTemp[0], [Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
          '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
          '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+'), Validators.required]),
        area: new FormControl(this.facilityTemp[1], Validators.required),
        cost: new FormControl(this.facilityTemp[2], Validators.required),
        maxPeople: new FormControl(this.facilityTemp[3], Validators.required),
        rentType: new FormControl(this.facilityTemp[4], Validators.required),
        facilityFree: new FormControl(this.facilityTemp[9], Validators.required)
      });
    } else {
      this.formGroup = this.fb.group({
        facilityType: new FormControl(value, Validators.required),
        name: new FormControl(this.facilityTemp[0], [Validators.pattern('[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+' +
          '(([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]' +
          '[a-zàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+)' +
          '|([ ][A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ]))+'), Validators.required]),
        area: new FormControl(this.facilityTemp[1], Validators.required),
        cost: new FormControl(this.facilityTemp[2], Validators.required),
        maxPeople: new FormControl(this.facilityTemp[3], Validators.required),
        rentType: new FormControl(this.facilityTemp[4], Validators.required),
        standardRoom: new FormControl(this.facilityTemp[5], Validators.required),
        description: new FormControl(this.facilityTemp[6], Validators.required),
        numberFloors: new FormControl(this.facilityTemp[8], [Validators.min(0), Validators.required]),
      });
    }
    this.showCreate = value;

  }

  onSubmit() {
    this.submit = true;
    if (this.formGroup.valid) {
      const facility: Facility = this.formGroup.value;
      console.log(this.formGroup.value.facilityType);
      facility.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCCTW6m38DgtNBxFB_fTN1kY0GPx2TBWSBw&usqp=CAU';
      facility.id = this.idFacility;
      this.facilityTypeService.findById(+this.formGroup.value.facilityType).subscribe(facilityType => {
        facility.facilityType = facilityType;
        this.rentTypeService.findById(+this.formGroup.value.rentType).subscribe(rentType => {
          facility.rentType = rentType;
          console.log(facility);
          this.facilityService.edit(facility).subscribe(next => {
            this.router.navigateByUrl('/facility/list');
          });
        });
      });
    }
  }
}
