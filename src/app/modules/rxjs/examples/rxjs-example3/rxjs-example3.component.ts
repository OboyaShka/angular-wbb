import { ChangeDetectionStrategy, Component, Inject, OnInit } from "@angular/core";
import { Observable, of, Subject, timer } from "rxjs";
import { LoginService } from "@app/modules/rxjs/examples/rxjs-example3/login.service";
import {
	catchError,
	ignoreElements, mapTo,
	repeat,
	retry,
	share,
	startWith,
	switchMap,
	switchMapTo
} from "rxjs/operators";
import { animate, style, transition, trigger } from "@angular/animations";

export const COLLAPSE = trigger("collapse", [
	transition(":enter", [
		style({ height: 0, opacity: 0 }),
		animate(".2s", style({ height: "*", opacity: 1 }))
	]),
	transition(":leave", [
		style({ height: "*" }),
		animate(".2s", style({ height: 0, opacity: 0 }))
	])
]);

@Component({
	selector: 'rxjs-example3',
	templateUrl: 'rxjs-example3.component.html',
	styleUrls: ['rxjs-example3.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		LoginService
	],
	animations: [COLLAPSE]
})
export class RxjsExample3Component implements OnInit {
	// public readonly error$ = new BehaviorSubject<string | null>(null)
	// public readonly user$ = new BehaviorSubject<string | null>(null)
	// public readonly isLoading$ = new BehaviorSubject<boolean>(false)
	public readonly submit$ = new Subject<void>()
	public readonly request$ = this.submit$.pipe(
		switchMapTo(this.service.pipe(startWith(""))),
		share()
	);
	public readonly user$ = this.request$.pipe(retry());
	public readonly error$ = this.request$.pipe(
		ignoreElements(),
		catchError(e => of(e)),
		repeat(),
		switchMap(e => timer(5000).pipe(mapTo(null), startWith(e)))
	);

	readonly disabled$ = this.request$.pipe(
		mapTo(true),
		catchError(() => of(false)),
		repeat()
	);

	constructor(
		@Inject(LoginService) private readonly service: Observable<string>
	) {
	}

	public ngOnInit() {
		// this.isLoading$.next(true)
		// this.service.pipe(
		// 	this.handleLoginError(),
		// 	finalize(() => this.isLoading$.next(false))
		// ).subscribe(userName => this.user$.next(userName))
	}

	// private handleLoginError<T>(): MonoTypeOperatorFunction<T> {
	// 	return pipe(
	// 		catchError((error: Error) => {
	// 			this.error$.next('error!: ' + error.message)
	// 			return throwError('Login error!');
	// 		})
	// 	);
	// }
}
