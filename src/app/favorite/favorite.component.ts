import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'favorite',
  templateUrl: 'favorite.component.html',
  styleUrls: ['favorite.component.css']
})
export class FavoriteComponent {

  private _isFavorite: boolean = false;
  @Output('change') click = new EventEmitter();

  toggleStar(): void {
    this.isFavorite = !this.isFavorite;

    this.click.emit({newValue: this.isFavorite});
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

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
