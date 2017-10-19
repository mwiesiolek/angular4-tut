import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormComponent } from './new-course-form.component';
import {FormBuilder} from "@angular/forms";

describe('NewCourseFormComponent', () => {
  let component: NewCourseFormComponent;
  let fixture: ComponentFixture<NewCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFormComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
