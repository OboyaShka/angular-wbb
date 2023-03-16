import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of, OperatorFunction } from "rxjs";
import { debounceTime, distinctUntilChanged, scan, startWith, switchMap } from "rxjs/operators";
import { FormControl } from "@angular/forms";

function requestBackendEmulation(search: string): Observable<readonly string[]> {
	console.log('backend called');

	const tests = ['test1', 'test2', 'test3'].filter(test => !!search && test.startsWith(search));

	if (tests.length) {
		return of(tests);
	}

	if (search.startsWith('1')) {
		return of(['125', '12', '199']);
	}

	return of([]);
}

export function smartSearch<T>(
	getSearchFunction: (search: string) => Observable<readonly T[]>,
	searchDebounceTimeMs: number = 400,
): OperatorFunction<string, readonly T[] | null> {
	return source => source.pipe(
		debounceTime(searchDebounceTimeMs),
		scan((prev, current) => {
			return prev !== '' && current.startsWith(prev)
				? prev
				: current
		}, ''),
		distinctUntilChanged(),
		switchMap(value => getSearchFunction(value).pipe(startWith(null))),
		startWith([])
	);
}

@Component({
	selector: 'app-rxjs-example8',
	templateUrl: './rxjs-example8.component.html',
	styleUrls: ['./rxjs-example8.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample8Component {
	readonly control = new FormControl('');

	readonly items$ = this.control.valueChanges.pipe(
		smartSearch(requestBackendEmulation)
	);

	readonly filterValue = (item: string, value: string): boolean => item.startsWith(value);

	readonly emptyArray = [];
}
