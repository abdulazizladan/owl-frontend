import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AuthInterceptor } from './auth/interceptors/auth.interceptor';

import { BaseChartDirective } from 'ng2-charts';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    BaseChartDirective,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideCharts(withDefaultRegisterables()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
