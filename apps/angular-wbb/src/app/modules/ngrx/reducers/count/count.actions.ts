import { Action } from "@ngrx/store";

export enum countActionsType {
	increase = '[COUNT] increase',
	decrease = '[COUNT] decrease',
	clear = '[COUNT] clear',
	updated = '[COUNT] updated'
}

export class CountIncreaseAction implements Action {
	readonly type = countActionsType.increase
}

export class CountDecreaseAction implements Action {
	readonly type  = countActionsType.decrease
}

export class CountClearAction implements Action {
	readonly type = countActionsType.clear
}

export class CountUpdatedAtAction implements Action {
	readonly type = countActionsType.updated
	constructor(public payload: {
		updated: number
	}) {
	}
}


export type CountActions = CountIncreaseAction | CountDecreaseAction | CountClearAction | CountUpdatedAtAction