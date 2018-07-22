import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FrameComponent} from './frame.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';

const routerSpy = jasmine.createSpyObj('Router', {url: ''});

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrameComponent],
      providers: [
        {provide: Router, useValue: routerSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
