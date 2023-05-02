import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { countSelectors } from "./reducers/count/count.selectors";
import { CountActions } from "./reducers/count/count.actions";
import { CountState } from "./reducers/count/count.reducer";

@Component({
	styleUrls: ['ngrx.component.less'],
	templateUrl: 'ngrx.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxComponent {
	public count$: Observable<number> = this.store$.pipe(select(countSelectors.selectCount))
	public date$: Observable<number> = this.store$.pipe(select(countSelectors.selectUpdatedAt))
	public disabled$: Observable<boolean> = this.count$.pipe(map(count => count <= 0))

	constructor(private store$: Store<CountState>) {
	}

	decrease() {
		this.store$.dispatch(CountActions.countDecreaseAction())
	}

	increase() {
		this.store$.dispatch(CountActions.countIncreaseAction())
	}

	clear() {
		this.store$.dispatch(CountActions.countClearAction())
	}
}