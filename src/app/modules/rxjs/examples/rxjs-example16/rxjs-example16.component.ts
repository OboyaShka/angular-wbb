import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Inject,
	ViewChild
} from "@angular/core";
import {
	BehaviorSubject,
	combineLatest,
	concat,
	fromEvent,
	merge,
	Observable,
	of,
	Subject
} from "rxjs";
import {
	distinctUntilChanged,
	endWith,
	filter,
	first,
	map,
	mapTo,
	pairwise,
	repeat,
	scan,
	share,
	startWith,
	switchMap,
	takeUntil,
	takeWhile
} from "rxjs/operators";
import { tuiClamp, tuiIsPresent, TuiDestroyService } from "@taiga-ui/cdk";
import { DomSanitizer } from "@angular/platform-browser";

export const enum DragStage {
	Start,
	Continues,
	End
}

export class DragState {
	constructor(readonly stage: DragStage, readonly event: MouseEvent) {}
}

export function dragAndDropFrom(element: Element): Observable<DragState> {
	const { ownerDocument } = element;

	if (!ownerDocument) {
		throw new Error("element does not have ownerDocument");
	}

	return concat(
		fromEvent<MouseEvent>(element, "mousedown").pipe(
			first(),
			map(event => new DragState(DragStage.Start, event))
		),
		merge(
			fromEvent<MouseEvent>(ownerDocument, "mousemove").pipe(
				map(event => new DragState(DragStage.Continues, event))
			),
			merge(
				fromEvent<MouseEvent>(ownerDocument, "mouseup"),
				fromEvent<MouseEvent>(ownerDocument, "dragend")
			).pipe(
				first(),
				map(event => new DragState(DragStage.End, event)),
				endWith<DragState | null>(null)
			)
		).pipe(takeWhile(tuiIsPresent))
	).pipe(repeat<any>());
}


const EMPTY_COORDINATES: [number, number] = [0, 0];
const DEFAULT_ZOOM = 1;
const MAX_ZOOM = 2;

@Component({
	selector: 'app-rxjs-example16',
	templateUrl: './rxjs-example16.component.html',
	styleUrls: ['./rxjs-example16.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [TuiDestroyService]
})
export class RxjsExample16Component {
	readonly drag$ = new Subject<DragState | null>();

	readonly zoom$ = new BehaviorSubject<number>(DEFAULT_ZOOM + 0.2);
	readonly rotation$ = new BehaviorSubject<number>(0);

	readonly width = 350;
	readonly height = 222;

	@ViewChild("zone")
	zoneRef: ElementRef<HTMLElement>;

	readonly wrapperTranslate$ = combineLatest([
		this.drag$.pipe(
			startWith(null),
			pairwise()
		),
		this.zoom$,
		this.rotation$
	]).pipe(
		scan<
			[[DragState | null, DragState | null], number, number],
			[number, number]
			>((coordinates, latest) => {
			const [pair, zoom] = latest;

			if (pair[1] === null || pair[0] === null) {
				return EMPTY_COORDINATES;
			}

			if (pair[1].stage === DragStage.Start) {
				return coordinates;
			}

			const moveX = pair[1].event.clientX - pair[0].event.clientX;
			const moveY = pair[1].event.clientY - pair[0].event.clientY;

			const offsetX = ((zoom - DEFAULT_ZOOM) * this.width) / 2;
			const offsetY = ((zoom - DEFAULT_ZOOM) * this.height) / 2;

			const x = tuiClamp(coordinates[0] + moveX, -offsetX, offsetX);
			const y = tuiClamp(coordinates[1] + moveY, -offsetY, offsetY);

			return [x, y];
		}, EMPTY_COORDINATES),
		startWith(EMPTY_COORDINATES),
		map(([x, y]) => `${x}px, ${y}px`),
		distinctUntilChanged(),
		share()
	);

	readonly transitioned$ = merge(
		this.drag$.pipe(
			filter(drag => drag === null),
			switchMap(() =>
				merge(
					this.zoom$.pipe(filter(zoom => zoom !== DEFAULT_ZOOM)),
					this.rotation$.pipe(filter(rotation => rotation !== 0))
				).pipe(
					mapTo(true),
					startWith(false)
				)
			)
		),
		this.drag$.pipe(
			filter(drag => drag !== null),
			map(drag => !drag || drag.stage !== DragStage.Continues)
		),
		of(true)
	);

	readonly wrapperTransform$ = combineLatest([
		this.wrapperTranslate$,
		this.zoom$,
		this.rotation$
	]).pipe(
		map(
			([translate, zoom, rotation]) =>
				`translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`
		)
	);

	@ViewChild("contentWrapper")
	set contentWrapper(elementRef: ElementRef<HTMLElement> | undefined) {
		if (!elementRef) {
			return;
		}

		merge(
			dragAndDropFrom(elementRef.nativeElement),
			fromEvent<TouchEvent>(elementRef.nativeElement, "touchmove").pipe(
				map(
					event =>
						/**
						 * DragFrom does not support touches and
						 * they are incompatible with MouseEvent, but we may use it
						 * while we need only ClientX/Y
						 */
						new DragState(DragStage.Continues, event.touches[0] as any)
				)
			)
		)
			.pipe(takeUntil(this.destroy$))
			.subscribe(event => {
				this.drag$.next(event);
			});
	}

	constructor(
		@Inject(DomSanitizer) public readonly sanitizer: DomSanitizer,
		@Inject(ElementRef) readonly elementRef: ElementRef<HTMLElement>,
		@Inject(TuiDestroyService) readonly destroy$: Observable<void>
	) {}

	updateZoom(newZoom: number) {
		this.zoom$.next(tuiClamp(newZoom, DEFAULT_ZOOM, MAX_ZOOM));
	}

	reset() {
		this.zoom$.next(DEFAULT_ZOOM);
		this.rotation$.next(0);
		this.drag$.next(null);
	}
}