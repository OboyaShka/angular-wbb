import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { SharedModule } from "@shared/shared.module";
import { RxjsRoutingModule } from "@app/modules/rxjs/rxjs-routing.module";
import { RxjsExample1Component } from './examples/rxjs-example1/rxjs-example1.component';
import { CommonModule } from "@angular/common";
import { FocusWithinModule } from "@app/modules/rxjs/examples/rxjs-example1/focus-within/focus-within.module";
import { RxjsExample2Component } from './examples/rxjs-example2/rxjs-example2.component';
import { TuiTabsModule } from "@taiga-ui/kit";
import { PAGE_VISIBILITY_PROVIDE_TOKEN } from "@app/modules/rxjs/rxjs.constants";
import { PageVisibilityService } from "@app/modules/rxjs/examples/rxjs-example2/pageVisibility.service";
import { RxjsExample3Component } from "@app/modules/rxjs/examples/rxjs-example3/rxjs-example3.component";
import { RxjsExample4Component } from './examples/rxjs-example4/rxjs-example4.component';
import { RxjsExample5Component } from './examples/rxjs-example5/rxjs-example5.component';
import { RxjsExample6Component } from './examples/rxjs-example6/rxjs-example6.component';
import { TuiRepeatTimesModule } from "@taiga-ui/cdk";

@NgModule({
    declarations: [
        RxjsComponent,
        RxjsExample1Component,
        RxjsExample2Component,
        RxjsExample3Component,
        RxjsExample4Component,
        RxjsExample5Component,
        RxjsExample6Component
    ],
	imports: [
		CommonModule,
		SharedModule,
		FocusWithinModule,
		RxjsRoutingModule,
		TuiTabsModule,
		TuiRepeatTimesModule,
	], providers: [
        {
            provide: PAGE_VISIBILITY_PROVIDE_TOKEN,
            useClass: PageVisibilityService
        }
    ]
})
export class RxjsModule {
}
