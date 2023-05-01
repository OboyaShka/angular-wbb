import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DiComponent } from "./di.component";
import { DI_CHILDREN_ROUTES } from "./di.constants";

const routes: Routes = [
    {
        path: '',
        component: DiComponent,
        children: DI_CHILDREN_ROUTES
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
export class DiRoutingModule {}
