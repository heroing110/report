import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterprisesAndEmploymentComponent} from './enterprises-and-employment.component';

describe('EnterprisesAndEmploymentComponent', () => {
  let component: EnterprisesAndEmploymentComponent;
  let fixture: ComponentFixture<EnterprisesAndEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisesAndEmploymentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisesAndEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
