import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CssComponent } from './css.component';

const routes: Routes = [
    {
        path: '',
        component: CssComponent
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
export class CssRoutingModule {}
