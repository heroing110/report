import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrameComponent} from './frame/frame.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NoAuthorityComponent} from './no-authority/no-authority.component';

const routes: Routes = [
  // 如果是空页面地址，则尝试跳转到报表主页面
  {path: '', pathMatch: 'full', redirectTo: 'reports'},

  {
    path: 'reports',
    component: FrameComponent, // 框架页面
    loadChildren: './reports/reports.module#ReportsModule', // 报表主模块
  },

  {path: 'login', loadChildren: './login/login.module#LoginModule'}, // 登录模块
  {path: '404', component: NotFoundComponent}, // 未找到页面
  {path: 'no-authority', component: NoAuthorityComponent}, // 无权限访问
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
