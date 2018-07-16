import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WholeComponent} from './whole/whole.component';
import {SubdivisionComponent} from './subdivision/subdivision.component';
import {CategoryAreaComponent} from './category-area/category-area.component';
import {CategoryTopShopComponent} from './category-top-shop/category-top-shop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WholeComponent, SubdivisionComponent, CategoryAreaComponent, CategoryTopShopComponent]
})
export class CategoryAnalysisModule {
}
