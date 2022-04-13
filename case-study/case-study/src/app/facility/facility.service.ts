import { Injectable } from '@angular/core';
import {ICustomer} from '../customer/customer';
import {IFacility} from './facility';
import {FacilityDao} from './facilityDao';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilities: IFacility [] = FacilityDao.facilities;

  constructor() { }

  getAll(){
    return this.facilities;
  }

  saveFacility(facilities) {
    this.facilities.push(facilities);
  }

  findById(id: number) {
    return this.facilities.find(facility => facility.id === id);
  }

  updateFacility(id: number, facility: IFacility) {
    for (let i=0; i<this.facilities.length; i++) {
      if (this.facilities[i].id === id)
        this.facilities[i] = facility;
    }
  }

  deleteFacility(id: number) {
    this.facilities = this.facilities.filter(customer => {
      return customer.id !== id;
    });
  }
}
