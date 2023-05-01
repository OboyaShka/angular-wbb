import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { LOADED } from '../loaded.token';
import { TUI_IS_IOS, tuiTypedFromEvent } from '@taiga-ui/cdk';
import { merge, Observable } from 'rxjs';
import { endWith, filter, map, mapTo, scan, switchMap, takeUntil, tap } from 'rxjs/operators';

export const MICRO_OFFSET = 10 ** -6;
export const PULLED_DISTANCE = 50;

export const PULLING = new InjectionToken<Observable<number>>('Stream that emits content pulling');

// private providers pattern
// https://medium.com/angular-in-depth/make-the-most-of-angular-di-private-providers-concept-93fcb8ec4ab3

export const PULL_TO_REFRESH_PROVIDERS: Provider[] = [
    {
        provide: PULLING,
        deps: [TUI_IS_IOS, LOADED, ElementRef],
        useFactory: pullingFactory
    }
];

export function pullingFactory(isIOS: boolean, loaded$: Observable<unknown>, { nativeElement }: ElementRef<HTMLElement>): Observable<number> {
    return merge(
        tuiTypedFromEvent(nativeElement, 'touchstart').pipe(
            filter(() => nativeElement.scrollTop === 0),
            switchMap(touchStart =>
                tuiTypedFromEvent(nativeElement, 'touchmove').pipe(
                    map(touchMove => touchMove.touches[0].clientY - touchStart.touches[0].clientY),
                    takeUntil(tuiTypedFromEvent(nativeElement, 'touchend')),
                    endWith(0)
                )
            )
        ),
        loaded$.pipe(mapTo(NaN))
    ).pipe(
        scan((max, current) => {
            if (isNaN(current)) {
                return 0;
            }

            const androidLoading = !isIOS && max === PULLED_DISTANCE;
            const dropped = current === 0 && max > PULLED_DISTANCE;

            return androidLoading || dropped ? PULLED_DISTANCE : current + MICRO_OFFSET;
        }, 0),
        tap(it => console.log(it))
    );
}
