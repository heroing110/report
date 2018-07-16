import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopAnalysisComponent} from './shop-analysis/shop-analysis.component';

const routes: Routes = [
  // 店铺分析
  {path: '', component: ShopAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAnalysisRoutingModule {
}
