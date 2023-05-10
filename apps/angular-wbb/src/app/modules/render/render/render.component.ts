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

	constructor() {
	}
	public click(): void {
		this.array.push(1)
		console.log('click')
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes)
	}
	ngOnInit(): void {
		console.log('ngOnInit')
	}
	ngDoCheck(): void {
		console.log('ngDoCheck')

	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit')
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked')
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit')
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked')
	}
	ngOnDestroy(): void {
		console.log('ngOnDestroy')
	}
	redraw() {
		console.log('renderRedraw')
	}
}
