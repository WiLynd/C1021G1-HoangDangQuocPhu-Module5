import { Component, OnInit } from '@angular/core';
import {IFacility} from '../model/facility';
import {FacilityDao} from '../dao/facilityDao';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilities: IFacility[] = FacilityDao.facilities;

  constructor() { }

  ngOnInit(): void {
  }

}
