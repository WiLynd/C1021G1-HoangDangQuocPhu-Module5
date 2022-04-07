import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    function comparePassword(c: AbstractControl) {
      const v=c.value;
      return (v.password === v.confirmPassword) ? null : {
        passwordNotMatch: true
      };
    }

    this.registerForm = new FormGroup({
      email: new FormControl(''),
      pwGroup: new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      }, comparePassword),
      country: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
    })

    this.registerForm = this.fb.group({
      email: ['',[
        Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validator: comparePassword}),
      country: ['',Validators.required],
      age: ['',[Validators.required, Validators.min(18)]],
      gender: ['',Validators.required],
      phone: ['',[Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
    })
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
}
