import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nameSurnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  cantBeKarlux(control: FormControl): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'karlux') {
      return {
        noKarlux: true
      }
    }
    return null;

  }

  equalFields(field1: string, field2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ diferentFields: true })
        return { diferentFields: true }
      }

      formGroup.get(field2)?.setErrors(null)
      return null;
    }
  }
}
