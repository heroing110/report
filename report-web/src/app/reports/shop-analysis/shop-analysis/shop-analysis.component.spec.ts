import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShopAnalysisComponent} from './shop-analysis.component';

describe('ShopAnalysisComponent', () => {
  let component: ShopAnalysisComponent;
  let fixture: ComponentFixture<ShopAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShopAnalysisComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
