import {NgModule} from '@angular/core';
import {WholeComponent} from './whole/whole.component';
import {SubdivisionComponent} from './subdivision/subdivision.component';
import {CategoryAreaComponent} from './category-area/category-area.component';
import {CategoryTopShopComponent} from './category-top-shop/category-top-shop.component';
import {SharedModule} from '../../shared/shared.module';
import {CategoryAnalysisRoutingModule} from './category-analysis-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryAnalysisRoutingModule
  ],
  declarations: [WholeComponent, SubdivisionComponent, CategoryAreaComponent, CategoryTopShopComponent]
})
export class CategoryAnalysisModule {
}
