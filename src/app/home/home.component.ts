import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  loadCourses(): void {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  trackCourse(index, course): void {
    return course ? course.id : undefined;
  }
}
