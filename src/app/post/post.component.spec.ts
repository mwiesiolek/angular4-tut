import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PostComponent} from "./post.component";
import {PostService} from "./post.service";
import {HttpModule} from "@angular/http";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      providers: [PostService],
      imports: [HttpModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
