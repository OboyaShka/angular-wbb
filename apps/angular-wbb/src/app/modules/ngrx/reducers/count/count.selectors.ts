import { countFeature } from "./count.reducer";

const {
	selectCount,
	selectUpdatedAt
} = countFeature

export const countSelectors = {
	selectCount,
	selectUpdatedAt
}
