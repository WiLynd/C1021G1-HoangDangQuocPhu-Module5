import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {AddFacilityComponent} from './facility/add-facility/add-facility.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {AddContractComponent} from './contract/add-contract/add-contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FacilityDetailComponent} from './facility/facility-detail/facility-detail.component';
import {HomeComponent} from './home/home.component';
import {DeleteFacilityComponent} from './facility/delete-facility/delete-facility.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    AddFacilityComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent,
    ListContractComponent,
    FacilityDetailComponent,
    HomeComponent,
    DeleteFacilityComponent,
    DeleteCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
