import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RxjsExample17DataService } from "@app/modules/rxjs/examples/rxjs-example17/rxjs-example17-data.service";
import { combineLatest, Observable, Subject, timer } from "rxjs";
import { distinctUntilChanged, map, repeat, skip, startWith, switchMapTo, takeUntil, takeWhile } from "rxjs/operators";

@Component({
	selector: 'app-rxjs-example17',
	templateUrl: './rxjs-example17.component.html',
	styleUrls: ['./rxjs-example17.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RxjsExample17DataService]
})
export class RxjsExample17Component {
	readonly load$ = new Subject<void>();

	readonly cancel$ = new Subject<void>();


	readonly data$ = this.load$.pipe(
		switchMapTo(nonFlickerLoader(this.dataService.load())),
		map(value => value ?? 'Loading...'),
		startWith('No data'),
		takeUntil(this.cancel$),
		repeat()
	);

	constructor(private readonly dataService: RxjsExample17DataService) {}
}

function nonFlickerLoader<T>(
	data$: Observable<T>,
	delay: number = 1000,
	duration: number = 1000
): Observable<T | null> {
	const loading$ = timer(delay, duration).pipe(
		map(i => !i),
		takeWhile<boolean>(Boolean, true),
		startWith(false),
	)

	return combineLatest([
		data$.pipe(startWith(null)),
		loading$,
	]).pipe(
		takeWhile(([data, loading]) => !data || loading, true),
		map(([data, loading]) => loading ? null : data),
		skip(1),
		distinctUntilChanged(),
	);
}


