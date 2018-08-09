import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrossBorderComponent} from './cross-border.component';

describe('CrossBorderComponent', () => {
  let component: CrossBorderComponent;
  let fixture: ComponentFixture<CrossBorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossBorderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
