import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	Output
} from "@angular/core";
import { TUI_IS_IOS } from "@taiga-ui/cdk";
import { Observable, of } from "rxjs";
import { distinctUntilChanged, filter, map, mapTo } from "rxjs/operators";
import {
	MICRO_OFFSET,
	PULLED_DISTANCE,
	PULLING,
	PULL_TO_REFRESH_PROVIDERS
} from "@app/modules/rxjs/examples/rxjs-example18/rxjs-example18-pull-to-refresh/rxjs-example18-pull-to-refresh.providers";

const IOS_LOADING_DISTANCE = PULLED_DISTANCE / 2;
const ANDROID_MAX_DISTANCE = PULLED_DISTANCE * 1.5;

function translateY(distance: number): string {
	return `translateY(${distance}px)`;
}

@Component({
	selector: 'pull-to-refresh',
	templateUrl: './rxjs-example18-pull-to-refresh.component.html',
	styleUrls: ['./rxjs-example18-pull-to-refresh.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [PULL_TO_REFRESH_PROVIDERS]
})
export class RxjsExample18PullToRefreshComponent {
	@Output()
	readonly pulled: Observable<void> = this.pulling$.pipe(
		distinctUntilChanged(),
		filter(distance => distance === PULLED_DISTANCE),
		mapTo(undefined)
	);

	constructor(
		@Inject(TUI_IS_IOS) readonly isIOS: boolean,
		@Inject(PULLING) private readonly pulling$: Observable<number>
	) {
	}

	readonly pulledInPercent$: Observable<number> = this.pulling$.pipe(
		map(distance => (distance * 100) / PULLED_DISTANCE)
	);

	readonly loaderTransform$: Observable<string> = this.pulling$.pipe(
		map(distance => translateY(Math.min(distance, ANDROID_MAX_DISTANCE)))
	);

	readonly contentTransform$: Observable<string | null> = this.isIOS
		? this.pulling$.pipe(
			map(distance =>
				distance === PULLED_DISTANCE ? IOS_LOADING_DISTANCE : distance
			),
			map(translateY)
		)
		: of(null);

	readonly dropped$: Observable<boolean> = this.pulling$.pipe(
		map(distance => distance <= MICRO_OFFSET || distance === PULLED_DISTANCE),
		distinctUntilChanged()
	);
}
