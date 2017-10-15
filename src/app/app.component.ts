import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];
  viewMode = 'sthElse';

  coursesAreAvailable(): boolean {
    return this.courses.length > 0;
  }

  onAdd(): void {
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course): void {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onUpdate(course): void {
    course.name = 'UPDATED';
  }
}
