import {NgModule} from '@angular/core';
import {RegionQuickViewComponent} from './region-quick-view/region-quick-view.component';
import {ContrastComponent} from './contrast/contrast.component';
import {SharedModule} from '../../shared/shared.module';
import {RegionAnalysisRoutingModule} from './region-analysis-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RegionAnalysisRoutingModule
  ],
  declarations: [RegionQuickViewComponent, ContrastComponent]
})
export class RegionAnalysisModule {
}
