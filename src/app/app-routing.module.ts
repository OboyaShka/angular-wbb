import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WbbMainComponent } from "@shared/components/wbb-main/wbb-main.component";

const routes: Routes = [
    {
        path: '',
       component: WbbMainComponent
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
