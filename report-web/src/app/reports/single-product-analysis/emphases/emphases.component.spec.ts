import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmphasesComponent} from './emphases.component';

describe('EmphasesComponent', () => {
  let component: EmphasesComponent;
  let fixture: ComponentFixture<EmphasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmphasesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmphasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
