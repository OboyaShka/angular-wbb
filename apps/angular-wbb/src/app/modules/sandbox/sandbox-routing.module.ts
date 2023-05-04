import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SandboxComponent } from "./sandbox.component";

const routes: Route[] = [
	{
		path: '',
		component: SandboxComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SandboxRoutingModule { }
