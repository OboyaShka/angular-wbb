import {
	AfterContentChecked,
	AfterContentInit, AfterViewChecked, AfterViewInit,
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component,
	DoCheck,
	OnChanges, OnDestroy,
	OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'on-push-component',
  templateUrl: './on-push-component.component.html',
  styleUrls: ['./on-push-component.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponentComponent implements
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
	public childContent: string = ''

	constructor(public cdr: ChangeDetectorRef){
		console.log('constructor parent')
	}
	// public click(): void {
	// 	this.array.push(1)
	// 	console.log('click')
	//
	// 	setTimeout(() => {
	// 		console.log('onPush setTimeout')
	// 		this.array.push(1)
	// 		this.data = ''
	// 	}, 2000)
	// }
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges parent', changes)
	}
	ngOnInit(): void {
		console.log('ngOnInit parent')
	}
	ngDoCheck(): void {
		console.log('ngDoCheck parent')

	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit parent')
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked parent')
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit parent')
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked parent')
	}
	ngOnDestroy(): void {
		console.log('ngOnDestroy parent')
	}
	redraw() {
		console.log('redraw parent')
	}
}
