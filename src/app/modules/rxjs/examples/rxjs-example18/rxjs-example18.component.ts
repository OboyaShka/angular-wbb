import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Subject } from "rxjs";
import { LOADED } from "./loaded.token";

const loaded$ = new Subject<void>();

@Component({
  selector: 'app-rxjs-example18',
  templateUrl: './rxjs-example18.component.html',
  styleUrls: ['./rxjs-example18.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: LOADED,
			useValue: loaded$.asObservable()
		}
	]
})
export class RxjsExample18Component {
	onPull() {
		console.log("pulled");
	}

	finishLoading() {
		loaded$.next();
	}
}

