import { RxjsComponent } from "@app/modules/rxjs/rxjs.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RxjsExample1Component } from "@app/modules/rxjs/examples/rxjs-example1/rxjs-example1.component";
import { RxjsExample2Component } from "@app/modules/rxjs/examples/rxjs-example2/rxjs-example2.component";
import { RxjsExample3Component } from "@app/modules/rxjs/examples/rxjs-example3/rxjs-example3.component";

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent,
        children: [
            {
                path: 'example1',
                component: RxjsExample1Component,
                data: {
                    tabIndex: 0
                }
            },
            {
                path: 'example2',
                component: RxjsExample2Component,
                data: {
                    tabIndex: 1
                }
            },
            {
                path: 'example3',
                component: RxjsExample3Component,
                data: {
                    tabIndex: 2
                }
            }
        ]
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
export class RxjsRoutingModule {}
