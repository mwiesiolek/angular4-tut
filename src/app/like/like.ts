export class Like {
  constructor(private _body: String, private _isLiked: boolean, private _likesCount: number){}

  get body(): String {
    return this._body;
  }

  get isLiked(): boolean {
    return this._isLiked;
  }

  get likesCount(): number {
    return this._likesCount;
  }
}
