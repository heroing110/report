import {NgModule} from '@angular/core';
import {ECommerceOverallComponent} from './e-commerce-overall/e-commerce-overall.component';
import {NetworkRetailingComponent} from './network-retailing/network-retailing.component';
import {SharedModule} from '../../shared/shared.module';
import {TrendAnalysisRoutingModule} from './trend-analysis-routing.module';
import {EnterprisesAndEmploymentComponent} from './enterprises-and-employment/enterprises-and-employment.component';
import {CrossBorderImportComponent} from './cross-border-import/cross-border-import.component';
import {CrossBorderExportComponent} from './cross-border-export/cross-border-export.component';
import {VirtualOnlineShoppingComponent} from './virtual-online-shopping/virtual-online-shopping.component';
import {KindOnlineShoppingComponent} from './kind-online-shopping/kind-online-shopping.component';
import {CountrysideComponent} from './countryside/countryside.component';
import {CrossBorderComponent} from './cross-border/cross-border.component';
import {B2bComponent} from './b2b/b2b.component';

@NgModule({
  imports: [
    SharedModule,
    TrendAnalysisRoutingModule
  ],
  declarations: [ECommerceOverallComponent, NetworkRetailingComponent,
    EnterprisesAndEmploymentComponent, CrossBorderImportComponent,
    CrossBorderExportComponent, VirtualOnlineShoppingComponent,
    KindOnlineShoppingComponent, CountrysideComponent,
    CrossBorderComponent, B2bComponent]
})
export class TrendAnalysisModule {
}
