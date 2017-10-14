export class Course {

  constructor(private _title: String, private _rating: number, private _students: number, private _price: number, private _releaseDate) {}

  get title(): String {
    return this._title;
  }

  get rating(): number {
    return this._rating;
  }

  get students(): number {
    return this._students;
  }

  get price(): number {
    return this._price;
  }

  get releaseDate(): any {
    return this._releaseDate;
  }
}
