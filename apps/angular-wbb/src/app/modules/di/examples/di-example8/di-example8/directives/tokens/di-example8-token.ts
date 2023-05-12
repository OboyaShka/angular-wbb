import { ChangeDetectorRef, InjectionToken, Optional, Provider } from "@angular/core";
import { TuiDestroyService } from "@taiga-ui/cdk";
import { ControllerDirective } from "../controller";
import { DiExample8ContentDirective } from "../di-example8-content.directive";
import { takeUntil } from "rxjs/operators";
import { Observable } from "rxjs";

export const CONTENT_WATCHED_CONTROLLER = new InjectionToken('content hint controller');

// Паттерн частного провайдера
export const CONTENT_CONTROLLER_PROVIDER: Provider[] = [
	TuiDestroyService,
	{
		provide: CONTENT_WATCHED_CONTROLLER,
		deps: [[new Optional(), DiExample8ContentDirective], ChangeDetectorRef, TuiDestroyService],
		useFactory: contentWatcherControllerFactory
	}
]

export function contentWatcherControllerFactory(
		directive: DiExample8ContentDirective,
		cdr: ChangeDetectorRef,
		destroy$: Observable<void>
): ControllerDirective {
	if (!directive) {
		return new DiExample8ContentDirective()
	}

	directive.change$.pipe(takeUntil(destroy$)).subscribe(() => {
		cdr.markForCheck()
	})

	return directive
}