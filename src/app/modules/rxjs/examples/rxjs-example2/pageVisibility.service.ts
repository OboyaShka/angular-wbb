import { Inject, Injectable } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { distinctUntilChanged, map } from "rxjs/operators";

@Injectable()
export class PageVisibilityService extends Observable<boolean>{
	constructor(@Inject(DOCUMENT) documentRef: Document) {
		const visibility$ = fromEvent<boolean>(documentRef, 'visibilitychange').pipe(
			map(() => documentRef.hidden ? false : true),
			distinctUntilChanged(),
		)
		super(subscriber => visibility$.subscribe(subscriber))
	}
}