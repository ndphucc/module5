import {Component, OnInit} from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';


@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityDelete: Facility;
  detail = -1;
  page = 0;
  next = false;
  previous = false;

  constructor(private facilityService: FacilityService) {
    this.facilityList = facilityService.getAll(0);
    this.check();
  }

  nextPage() {
    this.page = this.page + 1;
    this.facilityList = this.facilityService.getAll(this.page);
    this.check();
  }

  previousPage() {
    this.page = this.page - 1;
    this.facilityList = this.facilityService.getAll(this.page);
    this.check();
  }

  check() {
    if (this.facilityService.getAll(this.page + 1).length === 0) {
      this.next = false;
    } else {
      this.next = true;
    }
    if (this.facilityService.getAll(this.page - 1).length === 0) {
      this.previous = false;
    } else {
      this.previous = true;
    }
    console.log(this.next);
    console.log(this.previous);
  }

  getFacility(id: number) {
    this.facilityDelete = this.facilityService.findById(id);
  }

  ngOnInit(): void {
  }

  remove() {
    this.facilityService.remove(this.facilityDelete.id);
  }

  showDetail(id: number) {
    if (this.detail === id) {
      this.detail = -1;
    } else {
      this.detail = id;
    }
  }
}
