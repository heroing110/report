import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrossBorderExportComponent} from './cross-border-export.component';

describe('CrossBorderExportComponent', () => {
  let component: CrossBorderExportComponent;
  let fixture: ComponentFixture<CrossBorderExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossBorderExportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossBorderExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
