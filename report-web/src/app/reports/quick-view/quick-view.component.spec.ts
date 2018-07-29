import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickViewComponent} from './quick-view.component';

describe('RegionQuickViewComponent', () => {
  let component: QuickViewComponent;
  let fixture: ComponentFixture<QuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuickViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
