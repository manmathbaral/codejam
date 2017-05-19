import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {AppRoutingModule} from './routes.module';
import {DashboardModule} from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
	DashboardModule,
	AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
	{provide: LocationStrategy, useClass: HashLocationStrategy},
	AppService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
	constructor(public appService:AppService) {
	
	}
}