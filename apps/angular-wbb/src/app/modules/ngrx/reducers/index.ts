import { ActionReducerMap } from "@ngrx/store";
import { countNode, countReducer, CountReducer } from "./count/count.reducer";
import { CountActions } from "./count/count.actions";

export interface CountState {
	[countNode]: CountReducer
}

export const reducers: ActionReducerMap<CountState, CountActions> = {
	[countNode]: countReducer
}

