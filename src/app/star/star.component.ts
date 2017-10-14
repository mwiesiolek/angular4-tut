import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  private _isActive: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleStar(): void {
    this.isActive = !this.isActive;
  }

  set isActive(active: boolean) {
    this._isActive = active;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get isInactive(): boolean {
    return !this._isActive;
  }
}
