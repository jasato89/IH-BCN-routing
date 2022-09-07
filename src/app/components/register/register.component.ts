import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  genders: string[] = ["male", "female", "other"];

  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  ageInput: FormControl;
  passwordInput: FormControl;
  genderInput: FormControl;

  constructor() { 
    this.nameInput = new FormControl('', [Validators.required]);
    this.emailInput = new FormControl('', [Validators.required, Validators.email]);
    this.ageInput = new FormControl('', [Validators.required, Validators.min(18), Validators.max(120)]);
    this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.genderInput = new FormControl('', [Validators.required]);

    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      age: this.ageInput,
      password: this.passwordInput,
      gender: this.genderInput
    })


  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.value.name);

  }

}
