import { Directive, OnChanges } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export abstract class ControllerDirective implements OnChanges {
	public readonly change$ = new Subject<void>();

	ngOnChanges() {
		// При изменениях, сообщаем об этом в стрим
		this.change$.next()
	}
}

