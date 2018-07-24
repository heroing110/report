import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {DataTableComponent} from './data-table/data-table.component';
import {httpInterceptorProviders} from './http-proxy.interceptor';
import {CommonOperationComponent} from './common-operation/common-operation.component';
import {DataChartComponent} from './data-chart/data-chart.component';
import {RangeMonthComponent} from './range-month/range-month.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  declarations: [DataTableComponent, CommonOperationComponent, DataChartComponent, RangeMonthComponent],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, httpInterceptorProviders],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    DataTableComponent,
    CommonOperationComponent,
    DataChartComponent,
    RangeMonthComponent
  ]
})
export class SharedModule {
}
