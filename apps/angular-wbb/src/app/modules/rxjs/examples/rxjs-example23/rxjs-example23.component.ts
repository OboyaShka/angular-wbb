import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { PLUGIN_PROVIDERS, shouldCall } from "./plugins/stop-event-plugin.service";
import { Subject } from "rxjs";

export function scrolledToBottom(
		{scrollTop, scrollHeight, clientHeight}: HTMLElement
): boolean {
	return scrollTop >= scrollHeight - clientHeight - 20;
}

function asCallable<T>(a: T): T & Function {
	return a as any;
}

@Component({
	selector: 'app-rxjs-example23',
	templateUrl: './rxjs-example23.component.html',
	styleUrls: ['./rxjs-example23.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		PLUGIN_PROVIDERS
	],
	host: {
		"($.class.stuck)": "stuck$" // host listener
	}
})
export class RxjsExample23Component implements OnInit {
	private subject$ = new Subject<string>()
	public stuck$ = new Subject<string>()

	constructor({nativeElement}: ElementRef) {
		nativeElement['$.class.stuck'] = this.stuck$; // custom bind
	}

	ngOnInit(): void {
	}

	submit($event) {
		console.log('submit', $event)
	}
	click($event) {
		console.log('click', $event)
		this.subject$.next('asd')
		this.stuck$.next('asd')
	}

	@HostBinding('$.aria-label.attr')
	@HostListener('$.aria-label.attr')
	readonly label$ = asCallable(this.subject$);

	@HostListener('scroll.silent', ['$event.currentTarget'])
	@HostListener('init.onScroll', ['$event'])
	@shouldCall(scrolledToBottom)
	onScroll() {
		console.log('loadMore')
		this.subject$.next('')
	}
}
