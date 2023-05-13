import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { TEST_INJECTOR_TOKEN } from "./tokens";
import { DOCUMENT } from "@angular/common";

@Component({
	selector: 'app-di-example9',
	templateUrl: './di-example9.component.html',
	styleUrls: ['./di-example9.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: DOCUMENT,
			useFactory: () => {
				console.log('document patch')
				return {
					URL: 'haha'
				}
			}
		}
		// {
		// 	provide: TEST_INJECTOR_TOKEN,
		// 	deps: [[new Optional(), DOCUMENT]],
		// 	useFactory: (document: Document | null) => {
		// 		return `updated! ${document?.URL}`
		// 	}
		// }
	]
})
export class DiExample9Component implements OnInit {

	constructor(
			@Inject(DOCUMENT) private document: any,
			@Inject(TEST_INJECTOR_TOKEN) private test: string,
			) {
		console.log(this.test)
		console.log(this.document)
	}

	ngOnInit(): void {
	}

}
