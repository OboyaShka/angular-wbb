import {
	AfterContentChecked,
	AfterContentInit, AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	OnChanges, OnDestroy,
	OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'on-default-component',
  templateUrl: './on-default-component.component.html',
  styleUrls: ['./on-default-component.component.less']
})
export class OnDefaultComponentComponent implements
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
	public data: string = ''

	constructor() {
	}
	public click(): void {
		this.array.push(1)
		console.log('click')
		this.data = 'data'

		setTimeout(() => {
			console.log('onDefault setTimeout')
			this.array.push(1)
			this.data = ''
		}, 2000)
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('on-default-component ngOnChanges', changes)
	}
	ngOnInit(): void {
		console.log('on-default-component ngOnInit')
	}
	ngDoCheck(): void {
		console.log('on-default-component ngDoCheck')

	}
	ngAfterContentInit(): void {
		console.log('on-default-component ngAfterContentInit')
	}
	ngAfterContentChecked(): void {
		console.log('on-default-component ngAfterContentChecked')
	}
	ngAfterViewInit(): void {
		console.log('on-default-component ngAfterViewInit')
	}
	ngAfterViewChecked(): void {
		console.log('on-default-component ngAfterViewChecked')
	}
	ngOnDestroy(): void {
		console.log('on-default-component ngOnDestroy')
	}
	redraw() {
		console.log('onDefaultRedraw')
	}
}
