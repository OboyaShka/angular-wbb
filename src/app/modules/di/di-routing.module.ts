import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DI_CHILDREN_ROUTES } from "@app/modules/di/di.constants";
import { DiComponent } from "@app/modules/di/di.component";

const routes: Routes = [
	{
		path: '',
		component: DiComponent,
		children: DI_CHILDREN_ROUTES
	},
	{
		path: "**",
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DiRoutingModule {}
