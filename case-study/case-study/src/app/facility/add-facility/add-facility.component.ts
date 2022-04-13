import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl('',
      Validators.required
    ),
    img: new FormControl('',[
      Validators.required,
]),
    name: new FormControl('',
      Validators.required
    ),
    poolArea: new FormControl('',[
      Validators.required,
      Validators.min(0)
      ]),
    floor: new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
    payment: new FormControl('',[
      Validators.required,
      Validators.min(0)
    ]),
  });

  constructor(private facilityService : FacilityService) { }

  ngOnInit(): void {
  }

  addFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    console.log(this.facilityForm.value);
    this.facilityForm.reset();
  }
}
