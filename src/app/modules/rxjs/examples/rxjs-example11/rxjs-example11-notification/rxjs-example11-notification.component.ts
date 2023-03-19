import { Component, ChangeDetectionStrategy, Input, Inject, ElementRef } from '@angular/core';
import { fromEvent, Observer, timer } from "rxjs";
import { repeatWhen, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: 'notification',
  templateUrl: './rxjs-example11-notification.component.html',
  styleUrls: ['./rxjs-example11-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample11NotificationComponent<T> {
	@Input() observer: Observer<T>;

	readonly mouseenter$ = fromEvent(this.elementRef.nativeElement, "mouseenter");
	readonly mouseleave$ = fromEvent(this.elementRef.nativeElement, "mouseleave");

	readonly close$ = timer(3000).pipe(
		takeUntil(this.mouseenter$),
		repeatWhen(() => this.mouseleave$),
		tap(this.close.bind(this))
	);

	constructor(
		@Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
	) {}


	close() {
		this.observer.complete();
	}
}
