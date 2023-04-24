import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
	NotificationService
} from "@app/modules/rxjs/examples/rxjs-example11/rxjs-example11-notification/rxjs-example11-notification.service";

@Component({
  selector: 'app-rxjs-example11',
  templateUrl: './rxjs-example11.component.html',
  styleUrls: ['./rxjs-example11.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample11Component {
	text = "Example";

	constructor(readonly service: NotificationService) {}

	show() {
		this.service.show(this.text).subscribe();
	}
}
