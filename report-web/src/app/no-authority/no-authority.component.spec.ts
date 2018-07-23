import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NoAuthorityComponent} from './no-authority.component';

describe('NoAuthorityComponent', () => {
  let component: NoAuthorityComponent;
  let fixture: ComponentFixture<NoAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoAuthorityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
