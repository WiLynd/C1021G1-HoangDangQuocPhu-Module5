import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/customer';
import {CustomerDao} from '../dao/customerDao';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customers: ICustomer[] = CustomerDao.customers;

  id;
  name: '';
  phone: '';
  email: '';
  address: '';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customers.unshift(
      {
        id: (this.customers.length + 1),
        name: this.name,
        phone: this.phone,
        email: this.email,
        address: this.address,
      }
    )
    this.router.navigateByUrl("/customer-list")
  }
}
