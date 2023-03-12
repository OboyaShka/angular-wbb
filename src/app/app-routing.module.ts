import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "@app/app.component";

const routes: Routes = [
    {
        path: '',
        component: AppComponent
    },
    {
        path: 'rxjs',
        loadChildren: (): any => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
