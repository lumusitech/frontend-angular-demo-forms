import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  // Se usa en el html para setear los valores de inicio del Form
  initialFormValues = {
    product: 'nombre inicial',
    price: 0,
    stock: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  isTouched(name: string): boolean {
    return this.myForm?.controls[name]?.touched;
  }

  isInvalidProduct(): boolean {
    return this.myForm?.controls['product']?.invalid
  }

  isInvalidPrice(): boolean {
    return this.myForm?.controls['price']?.value < 0
  }

  isInvalidStock(): boolean {
    return this.myForm?.controls['stock']?.value < 0
  }

  save() {
    console.log('Submit hecho', this.myForm.value);

    this.myForm.reset(); // El mejor. Deja todos los campos como el inicio

    // this.myForm.resetForm(); // Deja todos los campos en null

    // this.myForm.resetForm({ // Se establecen los valores después de un reset
    //   product: 'algo',
    //   price: 0,
    //   stock: 0
    // });
  }
}
