import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.nameSurnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.cantBeKarlux]],
    pass: ['', [Validators.required, Validators.minLength(6)]],
    pass2: ['', Validators.required],
  },
    {
      validators: [this.validatorService.equalFields('pass', 'pass2')]
    });

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;
    if (errors?.['required']) return 'El email es requerido';
    else if (errors?.['pattern']) return 'El formato es incorrecto';
    else if (errors?.['emailAlreadyExists']) return 'el email ya existe';
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Luciano Figueroa',
      email: 'test1@test.com',
      username: 'lumusitech',
      pass: 123456,
      pass2: 123456
    });
  }

  // emailRequired() {
  //   return this.myForm.get('email')?.errors?.['required'];
  // }

  // emailFormat() {
  //   return this.myForm.get('email')?.errors?.['pattern'];
  // }

  // emailExists() {
  //   return this.myForm.get('email')?.errors?.['emailAlreadyExists'];
  // }

  isInvalidField(field: string): boolean {
    return this.myForm.controls[field]?.invalid
      && this.myForm.controls[field]?.touched
  }

  save() {
    this.myForm.markAsTouched;
    if (this.myForm.invalid) {
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();

  }

}
