import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { CountState } from "./reducers";
import { Observable } from "rxjs";
import { selectCount, selectDate } from "./reducers/count/count.selectors";
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from "./reducers/count/count.actions";
import { map } from "rxjs/operators";

@Component({
	styleUrls: ['ngrx.component.less'],
	templateUrl: 'ngrx.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxComponent {
	public count$: Observable<number> = this.store$.pipe(select(selectCount))
	public date$: Observable<number> = this.store$.pipe(select(selectDate))
	public disabled$: Observable<boolean> = this.count$.pipe(map(count => count <= 0))

	constructor(private store$: Store<CountState>) {
	}

	decrease() {
		this.store$.dispatch(new CountDecreaseAction())
	}

	increase() {
		this.store$.dispatch(new CountIncreaseAction())
	}

	clear() {
		this.store$.dispatch(new CountClearAction())
	}
}