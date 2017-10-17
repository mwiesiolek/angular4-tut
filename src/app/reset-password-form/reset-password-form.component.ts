import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ResetPasswordValidators} from "./reset-password-validators";

@Component({
  selector: 'reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent {
  form: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, ResetPasswordValidators.oldPasswordShouldBeCorrect],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get oldPassword(): FormControl {
    return this.form.get('oldPassword') as FormControl;
  }

  get newPassword(): FormControl {
    return this.form.get('newPassword') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }
}
