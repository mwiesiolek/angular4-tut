
import {AbstractControl, ValidationErrors} from "@angular/forms";
export class ResetPasswordValidators {

  private static oldPassword: String = '1234';

  static oldPasswordShouldBeCorrect(c: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if(c.value === ResetPasswordValidators.oldPassword) {
          resolve(null);
        } else {
          resolve({oldPasswordShouldBeCorrect: true});
        }

      }, 2000);
    });


  }
}
