import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {StoreSalesDistributionComponent} from './store-sales-distribution/store-sales-distribution.component';
import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees/enterprises-and-employees.component';
import {QuickViewComponent} from './quick-view/quick-view.component';
import {ContrastComponent} from './contrast/contrast.component';

const routes: Routes = [
  {path: '', redirectTo: 'quick-view'},

  // 各地速览
  {path: 'quick-view', component: QuickViewComponent},

  // 各地对比
  {path: 'contrast', component: ContrastComponent},

  // 品类分析
  {path: 'category', component: CategoryComponent},

  // 店铺销售额分步
  {path: 'store-sales-distribution', component: StoreSalesDistributionComponent},

  // 企业数、从业人数统计 (number-of-enterprises-and-number-of-employees)
  {path: 'enterprises-and-employees', component: EnterprisesAndEmployeesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictAnalysisRoutingModule {
}
