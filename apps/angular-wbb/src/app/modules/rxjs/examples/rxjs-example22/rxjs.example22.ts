import { MonoTypeOperatorFunction, Observable, pipe } from "rxjs";
import { NgZone } from "@angular/core";

export function zonefull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
	return source => new Observable(subscriber => source.subscribe({
		next: value => zone.run(() => subscriber.next(value)),
		error: err => zone.run(() => subscriber.error(err)),
		complete: () => zone.run(() => subscriber.complete()),
	}))
}

export function zonefree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
	return source => new Observable(subscriber => zone.runOutsideAngular(() => source.subscribe(subscriber)))
}

export function zoneOptimized<T>(
		ngZone: NgZone
): MonoTypeOperatorFunction<T> {
	return pipe(zonefree(ngZone), zonefull(ngZone));
}