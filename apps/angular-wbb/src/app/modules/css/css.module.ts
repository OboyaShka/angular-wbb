import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';
import { SharedModule } from "../../shared/shared.module";
import { CssRoutingModule } from "./css-routing.module";

@NgModule({
    declarations: [CssComponent],
    imports: [SharedModule, CssRoutingModule]
})
export class CssModule {}
