import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Mario Bros', Validators.required]
    ], Validators.required)
  })

  newFavControl: FormControl = this.fb.control('', Validators.required);

  // Para poder recorrer arrays en el template con ngFor
  get favourites() {
    return this.myForm.get('favourites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  isInvalidField(field: string): boolean {
    return this.myForm.controls[field]?.invalid
      && this.myForm.controls[field]?.touched
  }

  addFavourite() {
    if (this.newFavControl.invalid) return;

    // this.favourites.push(new FormControl(this.newFavControl.value, Validators.required));
    this.favourites.push(this.fb.control(this.newFavControl.value, Validators.required));
    this.newFavControl.reset();
  }

  removeFavourite(index: number){
    this.favourites.removeAt(index)
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

  }

}
