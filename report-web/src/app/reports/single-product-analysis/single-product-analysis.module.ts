import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {SingleProductAnalysisRoutingModule} from './single-product-analysis-routing.module';
import {PopularityComponent} from './popularity/popularity.component';
import {EmphasesComponent} from './emphases/emphases.component';

@NgModule({
  imports: [
    SharedModule,
    SingleProductAnalysisRoutingModule
  ],
  declarations: [PopularityComponent, EmphasesComponent]
})
export class SingleProductAnalysisModule {
}
