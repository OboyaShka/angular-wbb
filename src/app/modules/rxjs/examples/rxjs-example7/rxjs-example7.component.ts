import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { fromEvent } from "rxjs";
import { distinctUntilChanged, map, pairwise, throttleTime } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

const THRESHOLD = 500;

@Component({
  selector: 'app-rxjs-example7',
  templateUrl: './rxjs-example7.component.html',
  styleUrls: ['./rxjs-example7.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample7Component {
	readonly hidden$ = fromEvent(this.documentRef, "scroll").pipe(
		throttleTime(50),
		map(() => this.documentRef.documentElement.scrollTop),
		pairwise(),
		map(([prev, next]) => next > THRESHOLD || prev < next),
		distinctUntilChanged()
	);

	constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}
}
