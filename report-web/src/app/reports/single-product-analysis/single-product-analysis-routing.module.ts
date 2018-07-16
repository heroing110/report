import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PopularityComponent} from './popularity/popularity.component';
import {EmphasesComponent} from './emphases/emphases.component';

const routes: Routes = [
  {path: '', redirectTo: 'popularity'},

  // 人气单品
  {path: 'popularity', component: PopularityComponent},

  // 重点品类
  {path: 'emphases', component: EmphasesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleProductAnalysisRoutingModule {
}
