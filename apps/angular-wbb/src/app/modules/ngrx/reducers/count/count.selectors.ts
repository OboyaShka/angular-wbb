import { createFeatureSelector, createSelector } from "@ngrx/store";
import { countNode, CountReducer } from "./count.reducer";

export const selectCountFeature = createFeatureSelector<CountReducer>(countNode)

export const selectCount = createSelector(
		selectCountFeature,
		(state) => state.count
)

export const selectDate = createSelector(
		selectCountFeature,
		(state) => state.updatedAt
)