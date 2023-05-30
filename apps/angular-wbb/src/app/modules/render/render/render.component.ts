import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	DoCheck,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges
} from '@angular/core';

@Component({
	selector: 'app-render',
	templateUrl: './render.component.html',
	styleUrls: ['./render.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderComponent implements
		OnChanges,
		OnInit,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	public array: number[] = []
	private showLifecycle: boolean = true

	constructor() {
	}
	public click(): void {
		this.array.push(1)
		console.log('click')
	}
	ngOnChanges(changes: SimpleChanges): void {
		this.showLifecycle && console.log('ngOnChanges', changes)
	}
	ngOnInit(): void {
		this.showLifecycle && console.log('ngOnInit')
	}
	ngDoCheck(): void {
		this.showLifecycle && console.log('ngDoCheck')

	}
	ngAfterContentInit(): void {
		this.showLifecycle && console.log('ngAfterContentInit')
	}
	ngAfterContentChecked(): void {
		this.showLifecycle && console.log('ngAfterContentChecked')
	}
	ngAfterViewInit(): void {
		this.showLifecycle && console.log('ngAfterViewInit')
	}
	ngAfterViewChecked(): void {
		this.showLifecycle && console.log('ngAfterViewChecked')
	}
	ngOnDestroy(): void {
		this.showLifecycle && console.log('ngOnDestroy')
	}
	redraw() {
		this.showLifecycle && console.log('renderRedraw')
	}
}
