import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RXJS_CHILDREN_ROUTES } from "./rxjs.constants";
import { RxjsComponent } from "./rxjs.component";

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent,
        children: RXJS_CHILDREN_ROUTES
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsRoutingModule {}
