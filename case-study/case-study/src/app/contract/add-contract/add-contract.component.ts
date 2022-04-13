import { Component, OnInit } from '@angular/core';
import {IContract} from '../contract';
import {ContractDao} from '../contractDao';
import {ICustomer} from '../../customer/customer';
import {IFacility} from '../../facility/facility';
import {FacilityDao} from '../../facility/facilityDao';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  facilities :IFacility[] = FacilityDao.facilities;

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
