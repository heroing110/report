import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees.component';

describe('EnterprisesAndEmployeesComponent', () => {
  let component: EnterprisesAndEmployeesComponent;
  let fixture: ComponentFixture<EnterprisesAndEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisesAndEmployeesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisesAndEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
