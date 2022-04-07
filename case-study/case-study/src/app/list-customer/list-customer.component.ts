import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../model/customer';
import {CustomerDao} from '../dao/customerDao';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: ICustomer[] = CustomerDao.customers;

  constructor() { }

  ngOnInit(): void {
  }

}
