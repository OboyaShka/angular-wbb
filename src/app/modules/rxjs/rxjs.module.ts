import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from "@shared/shared/shared.module";
import { RxjsRoutingModule } from "@app/modules/rxjs/rxjs-routing.module";
import { RxjsExample1Component } from './examples/example1/rxjs-example1.component';


@NgModule({
    declarations: [
        RxjsComponent,
        RxjsExample1Component,
    ],
    imports: [
        SharedModule,
        RxjsRoutingModule
    ]
})
export class RxjsModule {
}
