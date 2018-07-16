import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WholeComponent} from './whole.component';

describe('WholeComponent', () => {
  let component: WholeComponent;
  let fixture: ComponentFixture<WholeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WholeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
