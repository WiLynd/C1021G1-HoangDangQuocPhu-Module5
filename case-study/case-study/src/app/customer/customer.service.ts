import { Injectable } from '@angular/core';
import {ICustomer} from './customer';
// import {CustomerDao} from './customerDao';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly URL_API='http://localhost:3000/'

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<ICustomer[]>(this.URL_API+'customer');
  }

  // createCustomer(customer) {
  //   this.customers.push(customer);
  // }
  //
  findById(id: number) {
    return this.httpClient.get<ICustomer>(this.URL_API+'customer/'+id)
  }

  updateCustomer(id: number, customer: ICustomer) {
    return this.httpClient.put<ICustomer>(this.URL_API+'customer/'+id,customer)
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete(this.URL_API+'customer/'+id)
  }

}
