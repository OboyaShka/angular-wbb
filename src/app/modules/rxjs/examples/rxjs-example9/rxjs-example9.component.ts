import { Component, ChangeDetectionStrategy } from '@angular/core';
import { from, of } from "rxjs";
import { concatMap, delay, repeat, startWith } from "rxjs/operators";

interface Line {
	readonly words: readonly string[];
	readonly duration: number;
}

export const SUBTITLES = [
	{
		text: "It had a begining",
		duration: 1000
	},
	{
		text: "It must have an end",
		duration: 1500
	},
	{
		text: "Don't leave me in darkness",
		duration: 1000
	},
	{
		text: "Please give me your hand",
		duration: 2000
	}
];

@Component({
  selector: 'app-rxjs-example9',
  templateUrl: './rxjs-example9.component.html',
  styleUrls: ['./rxjs-example9.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample9Component {
	readonly song$ = from([
		{ text: '', duration: 2000 },
		...SUBTITLES,
	]).pipe(
		concatMap(({text, duration}, i) =>
			of(null).pipe(
				delay(duration),
				startWith([
					{duration, words: text.split(' ')},
					{duration, words: SUBTITLES[i]?.text.split(' ')},
				]),
			),
		),
		repeat(),
	);

	getDuration({duration, words}: Line): number {
		return duration / words.length;
	}
}
