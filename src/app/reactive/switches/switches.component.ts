import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    termsAndConditions: [true, Validators.requiredTrue]
  });

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.reset({ ...this.person, termsAndConditions: false });


    // en el caso de que se necesite actualizar a el objeto person ante cualquier cambio
    this.myForm.valueChanges.subscribe(({ termsAndConditions, ...rest }) => {
      this.person = rest;
      // console.log(rest);
    });

    // En el caso de que se necesite actualizar al cambiar un control específico
    // this.myForm.get('termsAndConditions')?.valueChanges.subscribe(terms => {
    //   console.log(terms);
    // });
  }

  save() {
    if (this.myForm.invalid) return;

    const formValues = { ...this.myForm.value };
    delete formValues.termsAndConditions

    console.log(formValues);

    this.person = formValues;

    this.myForm.reset();

  }

}
