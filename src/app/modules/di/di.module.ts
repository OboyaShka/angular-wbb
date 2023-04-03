import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiComponent } from "@app/modules/di/di.component";
import { RouterModule } from "@angular/router";
import { TuiTabsModule } from "@taiga-ui/kit";
import { DiExample1Component } from "@app/modules/di/examples/di-example1/di-example1.component";
import { DiRoutingModule } from "@app/modules/di/di-routing.module";
import { DiExample1OrganizationComponent } from './examples/di-example1/di-example1-organiztaion/di-example1-organization.component';
import { DiExample1v2OrganizationComponent } from './examples/di-example1/di-example1v2-organization/di-example1v2-organization.component';
import { DiExample1v3OrganizationComponent } from './examples/di-example1/di-example1v3-organization/di-example1v3-organization.component';


@NgModule({
	declarations: [DiComponent, DiExample1Component, DiExample1OrganizationComponent, DiExample1v2OrganizationComponent, DiExample1v3OrganizationComponent],
	imports: [
		CommonModule,
		RouterModule,
		TuiTabsModule,
		DiRoutingModule
	]
})
export class DiModule {
}
