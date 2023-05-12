import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-di-example8-wrapper',
	templateUrl: './di-example8-wrapper.component.html',
	styleUrls: ['./di-example8-wrapper.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiExample8WrapperComponent implements OnInit {
	@Input() disabled: boolean

	constructor() {
	}

	ngOnInit(): void {
	}

}
