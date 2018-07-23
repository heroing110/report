import {NgModule} from '@angular/core';
import {ECommerceOverallComponent} from './e-commerce-overall/e-commerce-overall.component';
import {NetworkRetailingComponent} from './network-retailing/network-retailing.component';
import {SharedModule} from '../../shared/shared.module';
import {TrendAnalysisRoutingModule} from './trend-analysis-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TrendAnalysisRoutingModule
  ],
  declarations: [ECommerceOverallComponent, NetworkRetailingComponent]
})
export class TrendAnalysisModule {
}
