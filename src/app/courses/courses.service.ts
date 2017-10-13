import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(): String[] {
    return ['course1', 'course2', 'course3'];
  }
}
