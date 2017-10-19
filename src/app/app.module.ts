import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component'
import {CoursesService} from "./courses/courses.service";
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import {HttpModule} from "@angular/http";
import { PostComponent } from './post/post.component';
import {PostService} from "./post/post.service";
import {AppErrorHandler} from "./common/app-error-handler";
import { GitFollowerComponent } from './git-follower/git-follower.component';
import {GitFollowerService} from "./git-follower/git-follower.service";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NewCourseFormComponent,
    ResetPasswordFormComponent,
    PostComponent,
    GitFollowerComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers/:username',
        component: GitFollowerComponent
      },
      {
        path: 'followers',
        component: GitFollowerComponent
      },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GitFollowerService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
