import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DiExample6CounterService extends Observable<number> {
	private _count$ = new BehaviorSubject<number>(0)
	public count$: Observable<number> = this._count$

	inc() {
		this._count$.next(this._count$.value + 1)
	}

	dec() {
		this._count$.next(this._count$.value - 1)
	}
}
