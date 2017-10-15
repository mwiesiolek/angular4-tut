import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CoursesComponent} from "./courses/courses.component";
import {CoursesService} from "./courses/courses.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "./summary.pipe";
import {FavoriteComponent} from "./favorite/favorite.component";
import {TitleCasePipe} from "./title-case.pipe";
import {PanelComponent} from "./panel/panel.component";
import {LikeComponent} from "./like/like.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoursesComponent,
        SummaryPipe,
        FavoriteComponent,
        TitleCasePipe,
        PanelComponent,
        LikeComponent
      ],
      providers: [
        CoursesService
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular');
  }));
});
