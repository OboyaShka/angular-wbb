import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WbbMainComponent } from "./shared/components/wbb-main/wbb-main.component";

const routes: Routes = [
    {
        path: '',
        component: WbbMainComponent
    },
    {
        path: 'rxjs',
        loadChildren: (): any => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)
    },
    {
        path: 'di',
        loadChildren: (): any => import('./modules/di/di.module').then(m => m.DiModule)
    },
    {
        path: 'css',
        loadChildren: (): any => import('./modules/css/css.module').then(m => m.CssModule)
    },
    {
      path: 'ngrx',
      loadChildren: (): any => import('./modules/ngrx/ngrx.module').then(m => m.NgrxModule)
    },
	{
		path: 'sandbox',
		loadChildren: (): any => import('./modules/sandbox/sandbox.module').then(m => m.SandboxModule)
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
