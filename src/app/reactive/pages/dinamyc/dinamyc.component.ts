import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './dinamyc.component.html',
})
export class DinamycComponent {
  private fb = inject(FormBuilder);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  public myNewControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })

  onDelete(i: number) {
    this.favoriteGames.removeAt(i);
  }

  onAdd() {
    if(this.myNewControl.invalid) return ;
    this.favoriteGames.push(this.myNewControl);
  }
  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.favoriteGames.clear()
    this.myForm.reset();
  }
}
