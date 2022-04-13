import { Component, OnInit } from '@angular/core';
import {IFacility} from '../facility';
import {FacilityService} from '../facility.service';
import {FacilityDetailComponent} from '../facility-detail/facility-detail.component';
import {MatDialog} from '@angular/material/dialog';
import {DeleteFacilityComponent} from '../delete-facility/delete-facility.component';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilities: IFacility[];
  id: number;

  constructor(private facilityService: FacilityService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.facilities = this.facilityService.getAll();
  }

  deleteFacility(id: number) {
    this.facilityService.deleteFacility(id);
  }

  openDialog(id): void {

  }
}
