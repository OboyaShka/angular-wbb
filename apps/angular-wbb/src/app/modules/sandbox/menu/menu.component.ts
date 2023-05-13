import { ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
	private skipClick: boolean = false

	@HostBinding('class')
	hostClass = 'hidden'

	constructor() {
	}

	ngOnInit(): void {
	}

	show() {
		this.hostClass = ''
		this.skipClick = true
	}

	@HostListener('click', ['$event'])
	hostClick($event) {
		$event.stopPropagation()
		console.log('click', $event)
	}

	@HostListener('window:click')
	hide() {
		console.log(this.skipClick)
		if (this.skipClick) {
			this.skipClick = false
			return
		}
		this.hostClass = 'hidden'
	}

}
