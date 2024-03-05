import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl("", [ Validators.required ]),
    password: new FormControl("", [ Validators.required ]),
  });

  onSubmit() {
    console.log(`You entered username: ${this.registerForm.controls["username"].value} and password: ${this.registerForm.controls["password"].value}`);
    // console.log(this.registerForm.value);
  }
}
