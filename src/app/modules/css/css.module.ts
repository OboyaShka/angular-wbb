import { NgModule } from '@angular/core';
import { SharedModule } from "@shared/shared.module";
import { CssRoutingModule } from "@app/modules/css/css-routing.module";
import { CssComponent } from './css.component';



@NgModule({
  declarations: [
    CssComponent
  ],
  imports: [
    SharedModule,
    CssRoutingModule
  ]
})
export class CssModule { }
