import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CoursesComponent} from "./courses.component";
import {CoursesService} from "./courses.service";
import {FormsModule} from "@angular/forms";
import {SummaryPipe} from "../summary.pipe";
import {FavoriteComponent} from "../favorite/favorite.component";
import {TitleCasePipe} from "../title-case.pipe";
import {LikeComponent} from "../like/like.component";
import {PanelComponent} from "../panel/panel.component";

describe('CourseComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent,
        SummaryPipe,
        FavoriteComponent,
        TitleCasePipe,
        LikeComponent,
        PanelComponent
      ],
      providers: [CoursesService],
      imports: [FormsModule]
    }).compileComponents();
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
