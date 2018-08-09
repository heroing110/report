import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ECommerceOverallComponent} from './e-commerce-overall/e-commerce-overall.component';
import {NetworkRetailingComponent} from './network-retailing/network-retailing.component';
import {B2bComponent} from './b2b/b2b.component';
import {CrossBorderComponent} from './cross-border/cross-border.component';
import {CountrysideComponent} from './countryside/countryside.component';
import {KindOnlineShoppingComponent} from './kind-online-shopping/kind-online-shopping.component';
import {VirtualOnlineShoppingComponent} from './virtual-online-shopping/virtual-online-shopping.component';
import {CrossBorderExportComponent} from './cross-border-export/cross-border-export.component';
import {CrossBorderImportComponent} from './cross-border-import/cross-border-import.component';
import {EnterprisesAndEmploymentComponent} from './enterprises-and-employment/enterprises-and-employment.component';

const routes: Routes = [
  {path: '', redirectTo: 'quick-view'},

  // 电商总体交易走势
  {path: 'e-commerce-overall', component: ECommerceOverallComponent},

  // B2B交易走势
  {path: 'B2B', component: B2bComponent},

  // 网络零售交易走势
  {path: 'network-retailing', component: NetworkRetailingComponent},

  // 跨境电商交易走势
  {path: 'cross-border', component: CrossBorderComponent},
  // 农村电商交易走势
  {path: 'countryside', component: CountrysideComponent},
  // 实物商品网购交易走势
  {path: 'kind-online-shopping', component: KindOnlineShoppingComponent},
  // 虚拟商品网购交易走势
  {path: 'virtual-online-shopping', component: VirtualOnlineShoppingComponent},
  // 跨境电商出口走势
  {path: 'cross-border-export', component: CrossBorderExportComponent},
  // 跨境电商进口走势
  {path: 'cross-border-import', component: CrossBorderImportComponent},

  // 电商企业数/就业人数变化趋势
  {path: 'enterprises-and-employment', component: EnterprisesAndEmploymentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendAnalysisRoutingModule {
}
