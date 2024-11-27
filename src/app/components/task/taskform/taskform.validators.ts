//login.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Ejemplo estructura función
export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo = control.value;
    let expirationDate = new Date(valorCampo);
    let today = new Date()
    if (expirationDate >= today){
        return null;
    }
    return {invalidDate: true}
  };
}

export function priorityValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let validValues = ['L', 'M', 'H'];
    if (validValues.includes(control.value)) {
      return null; 
    }
    return { invalidPriority: true };
  };
}