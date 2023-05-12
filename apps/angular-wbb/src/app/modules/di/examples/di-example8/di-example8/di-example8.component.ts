import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-di-example8',
	templateUrl: './di-example8.component.html',
	styleUrls: ['./di-example8.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [

	]
})
export class DiExample8Component implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
