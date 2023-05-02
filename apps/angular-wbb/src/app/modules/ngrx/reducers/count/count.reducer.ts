import { createFeature, createReducer, on } from "@ngrx/store";
import { CountActions } from "./count.actions";

export interface CountState {
	count: number;
	updatedAt: number;
}

const initialState: CountState = {
	count: 0,
	updatedAt: Date.now()
}

export const countFeature = createFeature({
	name: 'count',
	reducer: createReducer(
			initialState,
			on(CountActions.countIncreaseAction, state => ({
				...state,
				count: state.count + 1
			})),
			on(CountActions.countDecreaseAction, state => ({
				...state,
				count: state.count - 1
			})),
			on(CountActions.countClearAction, state => ({
				...state,
				count: 0
			})),
			on(CountActions.countUpdatedAtAction, (state, { prop }) => ({
				...state,
				updatedAt: prop.updated
			}))
	)
})