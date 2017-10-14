import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesComponent} from './courses.component';
import {CoursesService} from "./courses.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "../summary.pipe";
import {StarComponent} from "../star/star.component";
import {TitleCasePipe} from "../title-case.pipe";

describe('CourseComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent, SummaryPipe, StarComponent, TitleCasePipe],
      providers: [CoursesService],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
