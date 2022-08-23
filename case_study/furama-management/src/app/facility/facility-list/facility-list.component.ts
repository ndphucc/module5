import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';


@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  page = 1;
  facilityList: Facility[] = [];
  facilityDelete: Facility;
  detail = -1;
  next = false;
  previous = false;

  constructor(private facilityService: FacilityService) {
    this.getPage();
  }

  getPage() {
    this.check();
    this.facilityService.getPage(this.page).subscribe(next => {
      this.facilityList = next;
    });
  }

  nextPage() {
    this.page = this.page + 1;
    this.getPage();
  }

  previousPage() {
    this.page = this.page - 1;
    this.getPage();
  }

  check() {
    this.facilityService.getPage(this.page + 1).subscribe(list => {
      this.next = list.length !== 0;
      this.previous = this.page > 1;
    });
  }

  ngOnInit(): void {
  }

  remove() {
    this.facilityService.remove(this.facilityDelete.id).subscribe(next => {
      this.getPage();
    });
  }

  showDetail(id: number) {
    if (this.detail === id) {
      this.detail = -1;
    } else {
      this.detail = id;
    }
  }

  getFacility(item: Facility) {
    this.facilityDelete = item;
  }
}
