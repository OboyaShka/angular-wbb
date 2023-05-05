import { tuiDrawCurve, tuiDrawLine } from "@taiga-ui/addon-charts/utils";

const COEFFICIENT = 500

export function draw(
	array: readonly [number, number][],
	index: number,
	smoothing: number
): string {
	return smoothing
		? tuiDrawCurve(array, index, smoothing / COEFFICIENT)
		: tuiDrawLine(array[index])
}