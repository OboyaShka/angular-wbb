import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { RxjsExample12ModalService } from "@app/modules/rxjs/examples/rxjs-example12/rxjs-example12-modal.service";

@Component({
  selector: 'app-rxjs-example12',
  templateUrl: './rxjs-example12.component.html',
  styleUrls: ['./rxjs-example12.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample12Component {
	constructor(@Inject(RxjsExample12ModalService) readonly modal$$: RxjsExample12ModalService) {}
}
