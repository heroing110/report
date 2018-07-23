import {NgModule} from '@angular/core';
import {ShopAnalysisComponent} from './shop-analysis/shop-analysis.component';
import {SharedModule} from '../../shared/shared.module';
import {ShopAnalysisRoutingModule} from './shop-analysis-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ShopAnalysisRoutingModule
  ],
  declarations: [ShopAnalysisComponent]
})
export class ShopAnalysisModule {
}
