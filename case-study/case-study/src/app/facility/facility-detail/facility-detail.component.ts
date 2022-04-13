import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  facilityForm: FormGroup;
  id: number

  constructor(private  facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        img: new FormControl(facility.img),
        name: new FormControl(facility.name),
        poolArea: new FormControl(facility.poolArea),
        floor: new FormControl(facility.floor),
        payment: new FormControl(facility.payment)
      })
    })
  }

  ngOnInit(): void {
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }
}
