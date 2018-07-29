import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegionQuickViewComponent} from './region-quick-view.component';

describe('RegionQuickViewComponent', () => {
  let component: RegionQuickViewComponent;
  let fixture: ComponentFixture<RegionQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegionQuickViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
