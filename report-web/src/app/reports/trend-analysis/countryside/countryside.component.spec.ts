import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountrysideComponent} from './countryside.component';

describe('CountrysideComponent', () => {
  let component: CountrysideComponent;
  let fixture: ComponentFixture<CountrysideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountrysideComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
