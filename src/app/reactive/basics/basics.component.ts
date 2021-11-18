import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // Opción más verbosa:
  // myForm: FormGroup = new FormGroup({
  //   name : new FormControl('RTX 4080ti'),
  //   price: new FormControl(1000),
  //   stock: new FormControl(5)
  // });

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    // to set defaults values on init
    // this.myForm.setValue({
    //   name: 'RTX 4080ti',
    //   price: 1000,
    //   stock: 2
    // });
  }

  isInvalidField(field: string) {
    return this.myForm.controls[field]?.invalid &&
      this.myForm.controls[field]?.touched
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
