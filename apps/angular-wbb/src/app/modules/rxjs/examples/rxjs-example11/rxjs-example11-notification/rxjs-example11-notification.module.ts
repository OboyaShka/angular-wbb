import { NgModule } from '@angular/core';
import { SharedModule } from "../../../../../shared/shared.module";
import { RxjsExample11NotificationComponent } from "./rxjs-example11-notification.component";

@NgModule({
    imports: [SharedModule],
    declarations: [RxjsExample11NotificationComponent],
    exports: [RxjsExample11NotificationComponent]
})
export class RxjsExample11NotificationModule {}
