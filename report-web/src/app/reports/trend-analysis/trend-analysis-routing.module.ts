import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ECommerceOverallComponent} from './e-commerce-overall/e-commerce-overall.component';
import {NetworkRetailingComponent} from './network-retailing/network-retailing.component';

const routes: Routes = [
  {path: '', redirectTo: 'e-commerce-overall'},

  // 电商总体交易走势
  {path: 'e-commerce-overall', component: ECommerceOverallComponent},

  // 网络零售交易走势
  {path: 'network-retailing', component: NetworkRetailingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendAnalysisRoutingModule {
}
