import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SandboxRoutingModule } from "./sandbox-routing.module";
import { SandboxComponent } from "./sandbox.component";
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlayerModule } from './player/player.module';

@NgModule({
	declarations: [SandboxComponent, LineChartComponent],
	imports: [SharedModule, SandboxRoutingModule, PlayerModule]
})
export class SandboxModule {}