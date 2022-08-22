import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';


@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  constructor(private facilityService: FacilityService) {
    this.facilityList = facilityService.getPage(0);
    this.check();
  }
  page = 0;
  facilityList: Facility[] = [];
  facilityDelete: Facility;
  detail = -1;
  next = false;
  previous = false;

  nextPage() {
    this.page = this.page + 1;
    this.facilityList = this.facilityService.getPage(this.page);
    this.check();
  }

  previousPage() {
    this.page = this.page - 1;
    this.facilityList = this.facilityService.getPage(this.page);
    this.check();
  }

  check() {
    if (this.facilityService.getPage(this.page + 1).length === 0) {
      this.next = false;
    } else {
      this.next = true;
    }
    if (this.facilityService.getPage(this.page - 1).length === 0) {
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
