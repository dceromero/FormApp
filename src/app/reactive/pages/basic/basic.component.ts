import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic.component.html',
  styles: ``
})
export class BasicComponent {
 
private fb = inject(FormBuilder);

  // public myForm:FormGroup = new FormGroup({
  //   name : new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(0)
  // });

  public myFB = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3)]], 
    price: [0, [ Validators.required, Validators.min(0) ]],
    stock: [0, [ Validators.required, Validators.min(0) ]]
  })

  onSave(){
    if(this.myFB.invalid) return; 
    console.log(this.myFB.value);

  }

}
