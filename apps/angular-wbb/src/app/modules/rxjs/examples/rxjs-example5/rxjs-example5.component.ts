import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { map, startWith, switchMapTo, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs-example5',
    templateUrl: './rxjs-example5.component.html',
    styleUrls: ['./rxjs-example5.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample5Component {
    // public readonly reset$ = new Subject<number>()
    // public readonly countdown$: Observable<number>
    //
    // constructor() {
    // 	this.countdown$ = this.reset$.pipe(
    // 		switchMap(time => interval(1000).pipe(
    // 			take(time),
    // 			map(it => time - it)
    // 		)),
    // 	)
    // }

    readonly reset$ = new Subject<void>();

    readonly countdown$ = this.reset$.pipe(startWith(0), switchMapTo(countdownFrom(45)));
}

function countdownFrom(start: number): Observable<number> {
    return timer(0, 1000).pipe(
        tap(it => console.log(it)),
        map(index => start - index),
        takeWhile<number>(Boolean, true)
    );
}
