import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICustomer} from '../customer';
import {ListCustomerComponent} from '../list-customer/list-customer.component';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer;

  constructor(private customerService: CustomerService,
              public dialogRef: MatDialogRef<EditCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(this.data.edit.customer.id,
        Validators.required
      ),
      code: new FormControl(this.data.edit.customer.code, [
        Validators.required,
        Validators.pattern(/^KH-\d{4}$/)
      ]),
      name: new FormControl(this.data.edit.customer.name,
        Validators.required
      ),
      birthday: new FormControl(this.data.edit.customer.birthday,
        Validators.required
      ),
      idCard: new FormControl(this.data.edit.customer.idCard, [
        Validators.required,
        Validators.pattern(/^\d{9}$|^\d{12}$/)
      ]),
      phone: new FormControl(this.data.edit.customer.phone, [
        Validators.required,
        Validators.pattern('(0|\\+84)(9[0-4]+|9[6-9])[0-9]{7}')
      ]),
      email: new FormControl(this.data.edit.customer.email, [
        Validators.required,
        Validators.email
      ]),
      address: new FormControl(this.data.edit.customer.address,
        Validators.required
      )
    });
  }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerForm.get('id').value, this.customerForm.value).subscribe();
    this.dialogRef.close();
    //
  }
}
