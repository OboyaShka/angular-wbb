import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from "./ngrx.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
	declarations: [
		NgrxComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		NgrxRoutingModule,

	]
})
export class NgrxModule {
}
