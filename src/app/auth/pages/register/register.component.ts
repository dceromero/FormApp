import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { cantBeStrinder, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  private fb = inject(FormBuilder);

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', [Validators.required, cantBeStrinder]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
