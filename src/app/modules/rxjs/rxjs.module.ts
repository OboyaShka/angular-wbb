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
import { RxjsExample7Component } from './examples/rxjs-example7/rxjs-example7.component';
import { RxjsExample8Component } from './examples/rxjs-example8/rxjs-example8.component';
import { FilterPipe } from "@app/modules/rxjs/examples/rxjs-example8/rxjs-example8.pipe";
import { RxjsExample9Component } from './examples/rxjs-example9/rxjs-example9.component';
import { RxjsExample10Component } from './examples/rxjs-example10/rxjs-example10.component';
import { RxjsExample11Component } from './examples/rxjs-example11/rxjs-example11.component';
import {
	RxjsExample11NotificationModule
} from "@app/modules/rxjs/examples/rxjs-example11/rxjs-example11-notification/rxjs-example11-notification.module";
import { RxjsExample12Component } from './examples/rxjs-example12/rxjs-example12.component';
import {
	RxjsExample12PortalComponent
} from './examples/rxjs-example12/rxjs-example12-portal/rxjs-example12-portal.component';
import {
	RxjsExample12ModalCloseDirective
} from './examples/rxjs-example12/rxjs-example12-portal/rxjs-example12-modal-close.directive';
import { RxjsExample13Component } from './examples/rxjs-example13/rxjs-example13.component';
import {
	RxjsExample13ElasticStickyModule
} from "@app/modules/rxjs/examples/rxjs-example13/rxjs-example13-elastic-sticky/rxjs-example13-elastic-sticky.module";
import { RxjsExample14Component } from './examples/rxjs-example14/rxjs-example14.component';
import { RxjsExample15Component } from './examples/rxjs-example15/rxjs-example15.component';
import {
	RxjsExample15FocusTypeDirective
} from "@app/modules/rxjs/examples/rxjs-example15/rxjs-example15-focus-type.directive";
import { RxjsExample16Component } from './examples/rxjs-example16/rxjs-example16.component';
import { RxjsExample17Component } from './examples/rxjs-example17/rxjs-example17.component';
import { RxjsExample18Component } from './examples/rxjs-example18/rxjs-example18.component';
import { RxjsExample19Component } from './examples/rxjs-example19/rxjs-example19.component';
import { RxjsExample20Component } from './examples/rxjs-example20/rxjs-example20.component';
import { RxjsExample20RippleDirective } from './examples/rxjs-example20/rxjs-example20-ripple.directive';

@NgModule({
	declarations: [
		RxjsComponent,
		RxjsExample1Component,
		RxjsExample2Component,
		RxjsExample3Component,
		RxjsExample4Component,
		RxjsExample5Component,
		RxjsExample6Component,
		RxjsExample7Component,
		RxjsExample8Component,
		FilterPipe,
		RxjsExample9Component,
		RxjsExample10Component,
		RxjsExample11Component,
		RxjsExample12Component,
		RxjsExample12PortalComponent,
		RxjsExample12ModalCloseDirective,
		RxjsExample13Component,
		RxjsExample14Component,
		RxjsExample15Component,
		RxjsExample15FocusTypeDirective,
		RxjsExample16Component,
		RxjsExample17Component,
  RxjsExample18Component,
  RxjsExample19Component,
  RxjsExample20Component,
  RxjsExample20RippleDirective,
	],
	imports: [
		CommonModule,
		SharedModule,
		FocusWithinModule,
		RxjsRoutingModule,
		TuiTabsModule,
		TuiRepeatTimesModule,
		RxjsExample11NotificationModule,
		RxjsExample13ElasticStickyModule
	], providers: [
		{
			provide: PAGE_VISIBILITY_PROVIDE_TOKEN,
			useClass: PageVisibilityService
		}
	]
})
export class RxjsModule {
}
