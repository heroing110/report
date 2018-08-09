import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CrossBorderImportComponent} from './cross-border-import.component';

describe('CrossBorderImportComponent', () => {
  let component: CrossBorderImportComponent;
  let fixture: ComponentFixture<CrossBorderImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrossBorderImportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossBorderImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
