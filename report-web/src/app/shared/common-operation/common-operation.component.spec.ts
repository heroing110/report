import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonOperationComponent} from './common-operation.component';

describe('CommonOperationComponent', () => {
  let component: CommonOperationComponent;
  let fixture: ComponentFixture<CommonOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonOperationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
