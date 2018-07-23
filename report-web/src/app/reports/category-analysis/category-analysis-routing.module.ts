import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WholeComponent} from './whole/whole.component';
import {SubdivisionComponent} from './subdivision/subdivision.component';
import {CategoryAreaComponent} from './category-area/category-area.component';
import {CategoryTopShopComponent} from './category-top-shop/category-top-shop.component';

const routes: Routes = [
  // 店铺分析
  {path: '', redirectTo: 'whole'},

  // 整体分析
  {path: 'whole', component: WholeComponent},
  // 品类细分
  {path: 'subdivision', component: SubdivisionComponent},
  // 品类区域分析
  {path: 'category-area', component: CategoryAreaComponent},
  // 各品类下头部店铺
  {path: 'category-top-shop', component: CategoryTopShopComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryAnalysisRoutingModule {
}
