import { createAction } from "@ngrx/store";

export namespace CountActions {
	export enum countActionsType {
		increase = '[COUNT] increase',
		decrease = '[COUNT] decrease',
		clear = '[COUNT] clear',
		updated = '[COUNT] updated'
	}

	export const countIncreaseAction = createAction(countActionsType.increase)
	export const countDecreaseAction = createAction(countActionsType.decrease)
	export const countClearAction = createAction(countActionsType.clear)
	export const countUpdatedAtAction = createAction(countActionsType.updated,  (prop: {
		updated: number
	}) => ({ prop }))
}
