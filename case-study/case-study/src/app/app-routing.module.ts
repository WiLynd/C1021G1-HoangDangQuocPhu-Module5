import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {AddFacilityComponent} from './facility/add-facility/add-facility.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {AddContractComponent} from './contract/add-contract/add-contract.component';
import {FacilityDetailComponent} from './facility/facility-detail/facility-detail.component';
import {HomeComponent} from './home/home.component';
import {DeleteFacilityComponent} from './facility/delete-facility/delete-facility.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'add-facility', component: AddFacilityComponent},
    {path: 'add-customer', component: AddCustomerComponent},
    {path: 'add-contract', component: AddContractComponent},
    {path: 'edit-facility/:id', component: EditFacilityComponent},
    {path: 'edit-customer/:id', component: EditCustomerComponent},
    {path: 'facility-detail/:id', component: FacilityDetailComponent},
    {path: 'delete-facility/:id', component: DeleteFacilityComponent},
    {path: 'facility-list', component: ListFacilityComponent},
    {path: 'customer-list', component: ListCustomerComponent},
    {path: 'contract-list', component: ListContractComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
