import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubdivisionComponent} from './subdivision.component';

describe('SubdivisionComponent', () => {
  let component: SubdivisionComponent;
  let fixture: ComponentFixture<SubdivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubdivisionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
