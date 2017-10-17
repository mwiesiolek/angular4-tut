import {AbstractControl, ValidationErrors} from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(c: AbstractControl): ValidationErrors | null {
    if ((c.value as String).indexOf(' ') >= 0) {
      return {cannotContainSpace: true}
    }

    return null;
  }

  static shouldBeUnique(c: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (c.value === 'maks') {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
