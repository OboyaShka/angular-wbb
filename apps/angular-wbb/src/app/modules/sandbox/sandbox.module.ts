import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SandboxRoutingModule } from "./sandbox-routing.module";
import { SandboxComponent } from "./sandbox.component";
import { TestMonsterComponent } from './test-monster/test-monster.component';

@NgModule({
	declarations: [SandboxComponent, TestMonsterComponent],
	imports: [SharedModule, SandboxRoutingModule]
})
export class SandboxModule {}