import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from "@shared/shared.module";
import { RxjsRoutingModule } from "@app/modules/rxjs/rxjs-routing.module";
import { RxjsExample1Component } from './examples/example1/rxjs-example1.component';
import { CommonModule } from "@angular/common";
import { FocusWithinModule } from "@app/modules/rxjs/examples/example1/focus-within/focus-within.module";

@NgModule({
    declarations: [
        RxjsComponent,
        RxjsExample1Component
    ],
    imports: [
        CommonModule,
        SharedModule,
        FocusWithinModule,
        RxjsRoutingModule,
    ]
})
export class RxjsModule {
}
