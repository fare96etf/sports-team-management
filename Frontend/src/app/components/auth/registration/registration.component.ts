import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUserRegistration } from 'src/app/models/auth.models';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('')
  });
  subscription: Subscription = new Subscription();

  constructor(private authApiService: AuthApiService) { }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)?.invalid && this.registerForm.get(controlName)?.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)?.hasError(errorName)
  }

  public registerUser() {
    let newUser: IUserRegistration = {
      userName: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirm
    };

    this.subscription = this.authApiService.registerUser(newUser).subscribe(
      data => { console.log(data); this.resetRegisterForm() }, //redirect to login page if successfull?
      error => console.log(error)
    );  
  }

  private resetRegisterForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
  }
}
