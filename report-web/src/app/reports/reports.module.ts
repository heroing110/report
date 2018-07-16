import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ReportsRoutingModule} from './reports-routing.module';
import {QuickViewComponent} from './quick-view/quick-view.component';

@NgModule({
  imports: [
    SharedModule,
    ReportsRoutingModule
  ],
  declarations: [QuickViewComponent]
})
export class ReportsModule {
}
