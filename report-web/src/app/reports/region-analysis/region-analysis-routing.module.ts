import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegionQuickViewComponent} from './region-quick-view/region-quick-view.component';
import {ContrastComponent} from './contrast/contrast.component';

const routes: Routes = [
  {path: '', redirectTo: 'quick-view'},

  // 各地速览
  {path: 'quick-view', component: RegionQuickViewComponent},

  // 各地对比
  {path: 'contrast', component: ContrastComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionAnalysisRoutingModule {
}
