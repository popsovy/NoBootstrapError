import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {createCustomElement } from '@angular/elements';
import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
    provide: new InjectionToken('externalUrlRedirectResolver'),
    useValue: (route: ActivatedRouteSnapshot) => {
    }
  }
],
  entryComponents: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(){
    customElements.define('my-app', createCustomElement(AppComponent, {injector: this.injector}));
  }
}
