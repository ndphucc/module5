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

  constructor(private facilityService: FacilityService) {
    this.facilityList = facilityService.getAll();
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
