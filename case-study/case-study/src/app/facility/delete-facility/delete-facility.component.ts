import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../facility.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IFacility} from '../facility';

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {

  facility: IFacility;
  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DeleteFacilityComponent>,
              ) {

  }

  ngOnInit(): void {
    this.facility = this.facilityService.findById(this.data);
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  deleteFacility(id: number) {
     this.facilityService.deleteFacility(this.data);
     this.dialogRef.close();
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
