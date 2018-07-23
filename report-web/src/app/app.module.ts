import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SharedModule} from './shared/shared.module';
import {FrameComponent} from './frame/frame.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NotFoundComponent} from './not-found/not-found.component';
import {NoAuthorityComponent} from './no-authority/no-authority.component';

registerLocaleData(zh);

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    FrameComponent,
    NotFoundComponent,
    NoAuthorityComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
