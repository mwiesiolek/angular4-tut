import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'favorite',
  templateUrl: 'favorite.component.html',
  styleUrls: ['favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  private _isFavorite: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleStar(): void {
    this.isFavorite = !this.isFavorite;
  }

  @Input('is-favorite')
  set isFavorite(active: boolean) {
    this._isFavorite = active;
  }

  get isFavorite(): boolean {
    return this._isFavorite;
  }

  get isNotFavorite(): boolean {
    return !this._isFavorite;
  }
}
