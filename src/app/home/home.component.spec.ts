import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {CoursesComponent} from "../courses/courses.component";
import {SummaryPipe} from "../summary.pipe";
import {FavoriteComponent} from "../favorite/favorite.component";
import {TitleCasePipe} from "../title-case.pipe";
import {PanelComponent} from "../panel/panel.component";
import {LikeComponent} from "../like/like.component";
import {InputFormatDirective} from "../input-format.directive";
import {ZippyComponent} from "../zippy/zippy.component";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {CourseFormComponent} from "../course-form/course-form.component";
import {SignupFormComponent} from "../signup-form/signup-form.component";
import {ResetPasswordFormComponent} from "../reset-password-form/reset-password-form.component";
import {PostComponent} from "../post/post.component";
import {CoursesService} from "../courses/courses.service";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NewCourseFormComponent} from "../new-course-form/new-course-form.component";
import {GitFollowerComponent} from "../git-follower/git-follower.component";
import {GitFollowerService} from "../git-follower/git-follower.service";
import {HttpModule} from "@angular/http";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CoursesComponent,
        SummaryPipe,
        FavoriteComponent,
        TitleCasePipe,
        PanelComponent,
        LikeComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        CourseFormComponent,
        SignupFormComponent,
        ResetPasswordFormComponent,
        PostComponent,
        NewCourseFormComponent,
        GitFollowerComponent
      ],
      providers: [
        CoursesService,
        GitFollowerService
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
