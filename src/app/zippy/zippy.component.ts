import {Component, Input, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ZippyComponent {

  private _title: String;
  private _isExpanded: boolean;

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  @Input('title')
  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get isExpanded(): boolean {
    return this._isExpanded;
  }

  set isExpanded(value: boolean) {
    this._isExpanded = value;
  }
}
