import { NgModule } from "@angular/core";
import {
	RxjsExample11NotificationComponent
} from "@app/modules/rxjs/examples/rxjs-example11/rxjs-example11-notification/rxjs-example11-notification.component";
import { SharedModule } from "@shared/shared.module";

@NgModule({
	imports: [SharedModule],
	declarations: [RxjsExample11NotificationComponent],
	exports: [RxjsExample11NotificationComponent]
})
export class NotificationModule {}
