import {Component, Input, ViewEncapsulation, Output, EventEmitter} from "@angular/core";
import {Like} from "./like";

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LikeComponent {

  private _isLiked: boolean = false;
  private _count: number = 0;

  @Output() change = new EventEmitter();

  onLikeClick(): void {
    this.isLiked = !this.isLiked;

    if(this.isLiked){
      this.count++;
    } else {
      this.count--;
    }

    this.change.emit(new Like('', this.isLiked, this.count));
  }

  @Input('is-liked')
  get isLiked(): boolean {
    return this._isLiked;
  }

  get isNotLiked(): boolean {
    return !this.isLiked;
  }

  @Input()
  get count(): number {
    return this._count;
  }

  set isLiked(state: boolean) {
    this._isLiked = state;
  }

  set count(value: number) {
    this._count = value;
  }
}

export interface LikeChangedEventArgs {
  like: Like;
}
