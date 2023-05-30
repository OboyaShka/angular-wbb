import {
	Directive,
	DoCheck, Input,
	OnChanges, OnDestroy,
	OnInit, SimpleChanges
} from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective implements
		OnChanges,
		OnInit,
		DoCheck,
		OnDestroy {
	private showLifecycle: boolean = true

	@Input() test: number = 0

	constructor() {
		console.log('constructor directive')
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.showLifecycle && console.log('ngOnChanges directive', changes)
	}
	ngOnInit(): void {
		this.showLifecycle && console.log('ngOnInit directive')
	}
	ngDoCheck(): void {
		this.showLifecycle && console.log('ngDoCheck directive')

	}
	ngOnDestroy(): void {
		this.showLifecycle && console.log('ngOnDestroy directive')
	}
}
