import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Inject } from '@angular/core';
import { fromEvent, Observable, Subject } from "rxjs";
import { map, shareReplay, startWith, switchMap, takeUntil, tap } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
import { hsvToRgb, rgbToHex } from "@app/modules/rxjs/examples/rxjs-example10/color-tools";


const PALETTE_WIDTH = 200;
const PALETTE_HEIGHT = 200;
const HUE = 100;

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value))

@Component({
	selector: 'app-rxjs-example10',
	templateUrl: './rxjs-example10.component.html',
	styleUrls: ['./rxjs-example10.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample10Component  {
	private readonly target$$ = new Subject<HTMLElement>();
	private readonly target$ = this.target$$.pipe(shareReplay(1));

	@ViewChild("colorPicker")
	set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
		if (ref) {
			this.target$$.next(ref.nativeElement);
		}
	}

	private readonly mouseDown$ = this.target$.pipe(
		switchMap(target => fromEvent<MouseEvent>(target, "mousedown")),
		tap(() => console.log('mousedown'))
	);

	private readonly mouseMove$ = this.target$.pipe(
		switchMap(target => fromEvent<MouseEvent>(target, "mousemove")),
		tap(() => console.log('mousemove'))
	);

	private readonly mouseUp$ = fromEvent<MouseEvent>(
		this.documentRef,
		"mouseup"
	).pipe(
		tap(() => console.log('mouseup'))
	)

	readonly coordinates$ = this.mouseDown$.pipe(
		switchMap(down =>
			this.mouseMove$.pipe(
				map(move => [move.offsetX, move.offsetY]),
				startWith([down.offsetX, down.offsetY]),
				map(([x, y]) => [
					clamp(x, 0, PALETTE_WIDTH),
					clamp(y, 0, PALETTE_HEIGHT)
				]),
				takeUntil(this.mouseUp$)
			)
		),
		startWith([0, 0])
	);

	constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}


	readonly hsv$: Observable<[number, number, number]> = this.coordinates$.pipe(
		map(coordinates => [
			HUE,
			coordinates[0] / PALETTE_WIDTH,
			((PALETTE_HEIGHT - coordinates[1]) / PALETTE_HEIGHT) * 255
		]),
	);

	readonly rgb$ = this.hsv$.pipe(map(hsvToRgb));
	readonly hex$ = this.rgb$.pipe(map(rgbToHex));
}
