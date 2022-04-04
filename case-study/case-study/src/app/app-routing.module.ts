import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import {ListFacilityComponent} from './list-facility/list-facility.component';
import {ListCustomerComponent} from './list-customer/list-customer.component';
import {ListContractComponent} from './list-contract/list-contract.component';
import {EditFacilityComponent} from './edit-facility/edit-facility.component';
import {HomeComponent} from './home/home.component';
import {EditCustomerComponent} from './edit-customer/edit-customer.component';
import {AddFacilityComponent} from './add-facility/add-facility.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {AddContractComponent} from './add-contract/add-contract.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'add-facility', component: AddFacilityComponent},
    {path: 'add-customer', component: AddCustomerComponent},
    {path: 'add-contract', component: AddContractComponent},
    {path: 'edit-facility', component: EditFacilityComponent},
    {path: 'edit-customer', component: EditCustomerComponent},
    {path: 'facility-list', component: ListFacilityComponent},
    {path: 'customer-list', component: ListCustomerComponent},
    {path: 'contract-list', component: ListContractComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
