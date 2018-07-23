import {NgModule} from '@angular/core';
import {CategoryComponent} from './category/category.component';
import {StoreSalesDistributionComponent} from './store-sales-distribution/store-sales-distribution.component';
import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees/enterprises-and-employees.component';
import {SharedModule} from '../../shared/shared.module';
import {RegionalAnalysisRoutingModule} from './regional-analysis-routing.module';

@NgModule({
  imports: [
    SharedModule,
    RegionalAnalysisRoutingModule
  ],
  declarations: [CategoryComponent, StoreSalesDistributionComponent, EnterprisesAndEmployeesComponent]
})
export class RegionalAnalysisModule {
}
