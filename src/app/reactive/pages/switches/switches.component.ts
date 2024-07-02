import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches.component.html',
})
export class SwitchesComponent {
  private fb = inject(FormBuilder);

  public myForm = this.fb.group({
    gender : ['M', Validators.required],
    notifications: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  })

  onSave(){
    if(this.myForm.invalid) return;
    console.log(this.myForm.value);
  }
}
