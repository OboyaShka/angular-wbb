import { RxjsComponent } from "@app/modules/rxjs/rxjs.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RxjsExample1Component } from "@app/modules/rxjs/examples/example1/rxjs-example1.component";

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent
    },
    {
        path: 'example1',
        component: RxjsExample1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule {}
