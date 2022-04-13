import { Component, OnInit } from '@angular/core';
import {ICustomer} from '../customer';
import {CustomerService} from '../customer.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCustomerComponent} from '../delete-customer/delete-customer.component';
import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: ICustomer[];
  customer: ICustomer;

  constructor(private customerService: CustomerService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(data => {
      // this.customer = data;
      const x=this.dialog.open(CustomerDetailComponent,{
        width: '700px',
        data: {customer: data},
      })
      x.afterClosed().subscribe( () => {
        this.ngOnInit();
      }, error => {})
    })

  }
}

