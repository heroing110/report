import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category/category.component';
import {StoreSalesDistributionComponent} from './store-sales-distribution/store-sales-distribution.component';
import {EnterprisesAndEmployeesComponent} from './enterprises-and-employees/enterprises-and-employees.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategoryComponent, StoreSalesDistributionComponent, EnterprisesAndEmployeesComponent]
})
export class RegionalAnalysisModule {
}
