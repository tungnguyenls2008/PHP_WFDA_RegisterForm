import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    retypedPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(32)]),
    city: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(16)]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required])
  });


  constructor() {
  }

  ngOnInit(): void {
  }

  returnValue(value) {
    return value;
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
