import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { SandboxRoutingModule } from "./sandbox-routing.module";
import { SandboxComponent } from "./sandbox.component";
import { LineChartComponent } from './line-chart/line-chart.component';
import { PlayerModule } from './player/player.module';
import { MenuComponent } from './menu/menu.component';
import { MenuDropdownComponent } from './menu/menu-dropdown/menu-dropdown.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';

@NgModule({
	declarations: [SandboxComponent, LineChartComponent, MenuComponent, MenuDropdownComponent, ComboBoxComponent],
	imports: [SharedModule, SandboxRoutingModule, PlayerModule]
})
export class SandboxModule {}