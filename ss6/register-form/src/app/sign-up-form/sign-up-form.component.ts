import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      email: new FormControl(''),
      confirmPassword: new FormControl('')
    })

      this.signUpForm = this.fb.group({
        email: ['',[
          Validators.required, Validators.email]],
        password: ['',
        [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
  }
}
