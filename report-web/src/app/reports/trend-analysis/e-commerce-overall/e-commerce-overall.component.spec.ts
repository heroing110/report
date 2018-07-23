import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ECommerceOverallComponent} from './e-commerce-overall.component';

describe('ECommerceOverallComponent', () => {
  let component: ECommerceOverallComponent;
  let fixture: ComponentFixture<ECommerceOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceOverallComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
