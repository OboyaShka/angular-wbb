import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { countActionsType, CountUpdatedAtAction } from "./reducers/count/count.actions";
import { map } from "rxjs/operators";

@Injectable()
export class NgrxEffects {
	constructor(private actions$: Actions) {}

	@Effect()
	updatedAt$() {
		return this.actions$.pipe(
			ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
				map(() => new CountUpdatedAtAction({
					updated: Date.now()
				}))
		)
	}
}