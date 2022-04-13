import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EditCustomerComponent} from '../edit-customer/edit-customer.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<CustomerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  updateCustomer(id: number) {
    const x=this.dialog.open(EditCustomerComponent,{
      width: '700px',
      data: {edit: this.data}
    })
    x.afterClosed().subscribe( ()=>{
      this.dialogRef.close();
    })
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.data.customer.id).subscribe( ()=> {
      this.snackBar.open("Đã xoá thành công!"
      )
      this.dialogRef.close();
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
