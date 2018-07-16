import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryTopShopComponent} from './category-top-shop.component';

describe('CategoryTopShopComponent', () => {
  let component: CategoryTopShopComponent;
  let fixture: ComponentFixture<CategoryTopShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryTopShopComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTopShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
