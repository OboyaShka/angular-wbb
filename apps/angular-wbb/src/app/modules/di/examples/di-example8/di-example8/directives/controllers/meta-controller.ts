import { merge, Observable } from "rxjs";
import { DiExample8EmojiDirective, EXAMPLE8_EMOJI } from "./di-example8-emoji.directive";
import { DiExample8ColorDirective, EXAMPLE8_COLOR } from "./di-example8-color.directive";
import { ChangeDetectorRef, InjectionToken, Provider } from "@angular/core";
import { TuiDestroyService } from "@taiga-ui/cdk";
import { takeUntil, tap } from "rxjs/operators";

export const WATCHED_METACONTROLLER = new InjectionToken('WATCHED_METACONTROLLER')

export const WATCHED_METACONTROLLER_PROVIDER: Provider[] = [
	TuiDestroyService,
	{
		provide: WATCHED_METACONTROLLER,
		deps: [
			ChangeDetectorRef,
			TuiDestroyService,
			EXAMPLE8_EMOJI,
			EXAMPLE8_COLOR,
		],
		useFactory: metaFactory
	}
]

function metaFactory(
		changeDetectorRef: ChangeDetectorRef,
		destroy$: Observable<void>,
		...controllers: [
			DiExample8EmojiDirective,
			DiExample8ColorDirective
		]
) {
	const changes$ = merge(
			...controllers.map(({change$}) => change$)
	).pipe(
			takeUntil(destroy$),
			tap(() => changeDetectorRef.markForCheck())
	)

	changes$.subscribe()

	return new MetaController(changes$, ...controllers)
}

export class MetaController {
	constructor(
			readonly change$: Observable<void>,
			private readonly emojiDirective: DiExample8EmojiDirective,
			private readonly colorDirective: DiExample8ColorDirective,
	) {
	}

	get color() {
		return this.colorDirective.diExample8Color
	}

	get emoji() {
		return this.emojiDirective.diExample8Emoji
	}
}