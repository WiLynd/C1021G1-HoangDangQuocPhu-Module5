import { Component, OnInit } from '@angular/core';
import {IContract} from '../model/contract';
import {ContractDao} from '../dao/contractDao';
import {ICustomer} from '../model/customer';
import {CustomerDao} from '../dao/customerDao';
import {IFacility} from '../model/facility';
import {FacilityDao} from '../dao/facilityDao';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  facilities :IFacility[] = FacilityDao.facilities;

  customers: ICustomer[] = CustomerDao.customers;

  contract: IContract[] = ContractDao.contracts;

  customerName = '';
  facilityName = '';
  startDay = '';
  endDay = '';
  prePayment;

  constructor() { }

  ngOnInit(): void {
  }

  addContract() {
    this.contract.unshift({
      id: (this.contract.length + 1),
      customerName: this.customerName,
      facilityName: this.facilityName,
      startDay: this.startDay,
      endDay: this.endDay,
      prePayment: this.prePayment,
    })
  }
}
