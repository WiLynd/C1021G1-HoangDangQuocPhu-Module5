import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id,
          Validators.required
        ),
        img: new FormControl(facility.img, [
          Validators.required,
        ]),
        name: new FormControl(facility.name,
          Validators.required
        ),
        poolArea: new FormControl(facility.poolArea, [
          Validators.required,
          Validators.min(0)
        ]),
        floor: new FormControl(facility.floor, [
          Validators.required,
          Validators.min(0)
        ]),
        payment: new FormControl(facility.payment, [
          Validators.required,
          Validators.min(0)
        ]),
      });
    });
  }
  ngOnInit(): void {
  }

  editFacility(id: number) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility);
    alert('Cập nhật thành công');
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }
}
