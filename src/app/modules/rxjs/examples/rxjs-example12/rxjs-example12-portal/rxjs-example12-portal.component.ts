import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { RxjsExample12ModalService } from "@app/modules/rxjs/examples/rxjs-example12/rxjs-example12-modal.service";

@Component({
	selector: 'app-portal',
	templateUrl: './rxjs-example12-portal.component.html',
	styleUrls: ['./rxjs-example12-portal.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample12PortalComponent {
	// public readonly outsideClick$ = fromEvent(this.documentRef, 'mouseup').pipe(
	// 	filter(event => {
	// 		return event.target !== this.modal?.nativeElement
	// 	})
	// )
	// public readonly keyDown$ = fromEvent(this.documentRef, 'keydown')
	// @ViewChild('modal') public modal: ElementRef
	//
	// public closeModal$ =
	// 	combineLatest([
	// 		this.outsideClick$,
	// 		this.keyDown$
	// 	]).pipe(tap(() => this.modal$$.next(null)))
	//

	constructor(
		@Inject(RxjsExample12ModalService) readonly modal$$: RxjsExample12ModalService,
		// @Inject(DOCUMENT) private documentRef: Document
	) {
	}

}
