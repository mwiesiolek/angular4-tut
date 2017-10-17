import {AbstractControl, ValidationErrors, FormControl} from "@angular/forms";
export class ResetPasswordValidators {

  private static oldPassword: String = '1234';

  static oldPasswordShouldBeCorrect(c: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (c.value === ResetPasswordValidators.oldPassword) {
          resolve(null);
        } else {
          resolve({oldPasswordShouldBeCorrect: true});
        }

      }, 2000);
    });
  }

  static passwordsShouldMatch(c: AbstractControl): ValidationErrors | null {
    let newPassword = (c.get('newPassword') as FormControl);
    let confirmPassword = (c.get('confirmPassword') as FormControl);

    if (newPassword.value === confirmPassword.value) {
      return null;
    }

    return {passwordsShouldMatch: true};
  }
}
