import { Directive, ElementRef, Inject, Output } from "@angular/core";
import { concat, fromEvent, Observable, of, race, timer } from "rxjs";
import { filter, first, mapTo, repeat, retry, switchMap, take, takeUntil } from "rxjs/operators";

export type FocusType
	= 'keyboard' | 'mouse' | 'touch' | 'script' | 'blur';

@Directive({
	selector: '[focusType]'
})
export class RxjsExample15FocusTypeDirective {
	private readonly focus$ = fromEvent(this.element, 'focus')

	@Output()
	readonly focusType: Observable<FocusType> = concat(
		race(
			fromEvent(this.element, "mousedown").pipe(mapTo("mouse")),
			fromEvent(this.element, "touchend").pipe(mapTo("touch")),
			fromEvent(this.document, "keydown").pipe(mapTo("keyboard")),
			this.focus$.pipe(mapTo("script"))
		).pipe(
			switchMap(type =>
				type === "script"
					? of(type)
					: this.focus$.pipe(
						mapTo(type),
						takeUntil(timer(0))
					)
			),
			first(),
			retry()
		),
		fromEvent(this.element, 'blur').pipe(
			filter(() => !this.focused),
			mapTo('blur'),
			take(1)
		)
	).pipe(repeat<any>())

	constructor(@Inject(ElementRef) private elementRef: ElementRef<HTMLElement>) {
	}

	private get focused(): boolean {
		return this.element === this.document.activeElement;
	}

	private get element(): HTMLElement {
		return this.elementRef.nativeElement;
	}

	private get document(): Document {
		return this.element.ownerDocument;
	}
}