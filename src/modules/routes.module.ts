import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*DASHBOARD COMPONENTS*/
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { 
	path: '', 
	component: DashboardComponent 
  }
  /*,
  { 
	path: 'master', 
	component: MasterComponent	
  },
  {
	path: 'master/create-new-store', 
	component: CreateStoreComponent
  }*/
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}