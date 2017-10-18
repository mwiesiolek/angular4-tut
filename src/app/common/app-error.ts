export class AppError {
  constructor(private _originalError?: any) {}

  get originalError(): any {
    return this._originalError;
  }
}
