import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RangeMonthComponent} from './range-month.component';

describe('RangeMonthComponent', () => {
  let component: RangeMonthComponent;
  let fixture: ComponentFixture<RangeMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeMonthComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
