import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFollowerComponent } from './git-follower.component';
import {GitFollowerService} from "./git-follower.service";
import {Http} from "@angular/http";

describe('GitFollowerComponent', () => {
  let component: GitFollowerComponent;
  let fixture: ComponentFixture<GitFollowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFollowerComponent ],
      providers: [GitFollowerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/*  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
