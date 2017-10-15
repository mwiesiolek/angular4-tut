import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  courses = [1, 2];
  viewMode = 'sthElse';

  coursesAreAvailable(): boolean {
    return this.courses.length > 0;
  }
}
