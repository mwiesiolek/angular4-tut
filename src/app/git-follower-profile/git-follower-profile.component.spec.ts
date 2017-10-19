import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowerProfileComponent } from './git-follower-profile.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('GitFollowerProfileComponent', () => {
  let component: GitFollowerProfileComponent;
  let fixture: ComponentFixture<GitFollowerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowerProfileComponent ],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
