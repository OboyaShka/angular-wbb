import {
	ChangeDetectionStrategy,
	Component,
	HostBinding,
	Input
} from "@angular/core";

const HIDDEN_DISTANCE = 2;
const ROTATE_X_DEFAULT = 180;
const ROTATE_X_MAX = 500;
const ROTATE_X_MULTIPLIER = 2.3;


@Component({
  selector: 'loader-android',
  templateUrl: './rxjs-example18-loader-android.component.html',
  styleUrls: ['./rxjs-example18-loader-android.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample18LoaderAndroidComponent  {
	@Input()
	pulled = 0;

	get transform(): string {
		const rotateX = Math.min(
			ROTATE_X_DEFAULT + this.pulled * ROTATE_X_MULTIPLIER,
			ROTATE_X_MAX
		);

		return `rotate(${rotateX} 0 0)`;
	}

	@HostBinding("class._hidden")
	get hidden(): boolean {
		return this.pulled < HIDDEN_DISTANCE;
	}
}
