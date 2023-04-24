import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { map, pairwise, scan } from "rxjs/operators";
import { Observable } from "rxjs";


export function animationFrame({
	                               requestAnimationFrame,
	                               cancelAnimationFrame
                               }: Window): Observable<DOMHighResTimeStamp> {
	return new Observable(subscriber => {
		let id = NaN;

		const callback = (timestamp: DOMHighResTimeStamp) => {
			subscriber.next(timestamp);
			id = requestAnimationFrame(callback);
		};

		id = requestAnimationFrame(callback);

		return () => {
			cancelAnimationFrame(id);
		};
	});
}


@Component({
	selector: 'app-rxjs-example19',
	templateUrl: './rxjs-example19.component.html',
	styleUrls: ['./rxjs-example19.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample19Component {
	readonly fps$ = animationFrame(this.documentRef.defaultView!).pipe(
		pairwise(),
		scan((acc, [prev, cur]) => {
			// @ts-ignore
			if (acc.push(1000 / (cur - prev)) > 60) {
				acc.shift();
			}
			return acc;
		}, []),
		map(arr => Math.round(arr.reduce((acc, cur) => acc + cur, 0) / arr.length))
	);

	constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {
	}

	onMouseMove() {
		console.log(this.fibonacci(35));
	}

	private fibonacci(num: number): number {
		return num > 1
			? this.fibonacci(num - 1) + this.fibonacci(num - 2)
			: 1;
	}
}
