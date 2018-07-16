import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {StoreSalesDistributionComponent} from './store-sales-distribution/store-sales-distribution.component';
import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees/enterprises-and-employees.component';

const routes: Routes = [
  {path: '', redirectTo: 'category'},

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
export class RegionalAnalysisRoutingModule {
}
