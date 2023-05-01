import { ActionReducer } from "@ngrx/store";
import { CountActions, countActionsType } from "./count.actions";

export const countNode = 'count'

export interface CountReducer {
	count: number;
	updatedAt: number;
}

const initialState: CountReducer = {
	count: 0,
	updatedAt: Date.now()
}

export const countReducer: ActionReducer<CountReducer, CountActions> = (state = initialState, action) => {
	switch (action.type) {
		case countActionsType.increase:
			return {
				...state,
				count: state.count + 1
			}
		case countActionsType.decrease:
			return {
				...state,
				count: state.count - 1
			}
		case countActionsType.clear:
			return {
				...state,
				count: 0
			}
		case countActionsType.updated:
			return {
				...state,
				updatedAt: action.payload.updated
			}
		default:
			return state
	}
}