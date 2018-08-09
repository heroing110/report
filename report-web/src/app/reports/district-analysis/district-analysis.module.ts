import {NgModule} from '@angular/core';
import {CategoryComponent} from './category/category.component';
import {StoreSalesDistributionComponent} from './store-sales-distribution/store-sales-distribution.component';
import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees/enterprises-and-employees.component';
import {SharedModule} from '../../shared/shared.module';
import {DistrictAnalysisRoutingModule} from './district-analysis-routing.module';
import {QuickViewComponent} from './quick-view/quick-view.component';
import {ContrastComponent} from './contrast/contrast.component';

@NgModule({
  imports: [
    SharedModule,
    DistrictAnalysisRoutingModule
  ],
  declarations: [CategoryComponent, StoreSalesDistributionComponent,
    EnterprisesAndEmployeesComponent, QuickViewComponent, ContrastComponent]
})
export class DistrictAnalysisModule {
}
