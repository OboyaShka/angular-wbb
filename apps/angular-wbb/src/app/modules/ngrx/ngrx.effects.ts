import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { CountActions } from "./reducers/count/count.actions";
import countActionsType = CountActions.countActionsType;

@Injectable()
export class NgrxEffects {
	constructor(private actions$: Actions) {
	}

	@Effect()
	updatedAt$() {
		return this.actions$.pipe(
				ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
				map(() => CountActions.countUpdatedAtAction({updated: Date.now()}))
		)
	}
}