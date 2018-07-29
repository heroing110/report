import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuickViewComponent} from './quick-view/quick-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'quick-view'},

  // 品类分析  categoryAnalysis
  {path: 'category-analysis', loadChildren: './category-analysis/category-analysis.module#CategoryAnalysisModule'},

  // 本地速览 quickView
  {path: 'quick-view', component: QuickViewComponent},

  // 地域分析  regionAnalysis
  {path: 'region-analysis', loadChildren: './region-analysis/region-analysis.module#RegionAnalysisModule'},

  // 区域分析  districtAnalysis
  {path: 'district-analysis', loadChildren: './district-analysis/district-analysis.module#DistrictAnalysisModule'},

  // 店铺分析 shopAnalysis
  {path: 'shop-analysis', loadChildren: './shop-analysis/shop-analysis.module#ShopAnalysisModule'},

  // 单品分析  singleProductAnalysis
  {path: 'single-product-analysis', loadChildren: './single-product-analysis/single-product-analysis.module#SingleProductAnalysisModule'},

  // 趋势分析  trendAnalysis
  {path: 'trend-analysis', loadChildren: './trend-analysis/trend-analysis.module#TrendAnalysisModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
