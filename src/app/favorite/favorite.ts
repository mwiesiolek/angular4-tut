export class Favorite {
  constructor(private _title: String, private _isFavorite: boolean){}

  get title(): String {
    return this._title;
  }

  set title(title: String) {
    this._title = title;
  }

  get isFavorite(): boolean {
    return this._isFavorite;
  }

  set isFavorite(state: boolean) {
    this._isFavorite = state;
  }
}
