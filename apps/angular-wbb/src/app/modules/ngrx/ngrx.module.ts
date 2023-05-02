import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from "./ngrx.component";
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { countFeature } from "./reducers/count/count.reducer";
import { EffectsModule } from "@ngrx/effects";
import { NgrxEffects } from "./ngrx.effects";

@NgModule({
	declarations: [
		NgrxComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		NgrxRoutingModule,
		EffectsModule.forFeature([NgrxEffects]),
		StoreModule.forFeature( countFeature )
	]
})
export class NgrxModule {
}
