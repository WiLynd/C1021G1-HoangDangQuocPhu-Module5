import { Component, OnInit } from '@angular/core';
import {IFacility} from '../model/facility';
import {FacilityDao} from '../dao/facilityDao';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  facilities :IFacility[] = FacilityDao.facilities;

  id;
  name: '';
  url: '';
  payment;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addFacility() {
    this.facilities.unshift({
      id: (this.facilities.length +1),
      name: this.name,
      img: this.url,
      payment: this.payment
    })
    this.router.navigateByUrl("/facility-list")
  }
}
