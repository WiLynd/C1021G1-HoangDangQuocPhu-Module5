import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [
      Validators.required
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.pattern(/^KH-\d{4}$/)
    ]),
    name: new FormControl('',
      Validators.required
    ),
    birthday: new FormControl('',
      Validators.required
    ),
    idCard: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{9}$|^\d{12}$/)
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern("(0|\\+84)(9[0-4]+|9[6-9])[0-9]{7}")
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('',
      Validators.required
    ),
  });

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  addCustomer() {

  }
}
