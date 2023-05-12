import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { DiExample8ContentDirective } from "../../directives/di-example8-content.directive";
import { TuiDestroyService } from "@taiga-ui/cdk";
import { Observable } from "rxjs";
import { CONTENT_CONTROLLER_PROVIDER, CONTENT_WATCHED_CONTROLLER } from "../../directives/tokens/di-example8-token";
import {
	MetaController,
	WATCHED_METACONTROLLER,
	WATCHED_METACONTROLLER_PROVIDER
} from "../../directives/controllers/meta-controller";

@Component({
	selector: 'app-di-example8-child',
	templateUrl: './di-example8-child.component.html',
	styleUrls: ['./di-example8-child.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ CONTENT_CONTROLLER_PROVIDER, WATCHED_METACONTROLLER_PROVIDER ]
	// providers: [ TuiDestroyService ]
})
export class DiExample8ChildComponent implements OnInit {
	// Мы хотим получать импуты, обходя компонент враппер.
	// Можно доставать через DI директивы, но тогда при изменении импута не будет ререндера. Паттерн контроллер решает эту проблему
	@Input() disabled: boolean

	constructor(
			@Inject(ChangeDetectorRef) readonly changeDetectorRef: ChangeDetectorRef,
			@Optional()
			@Inject(CONTENT_WATCHED_CONTROLLER)
			public contentDirective: DiExample8ContentDirective,
			@Inject(TuiDestroyService) readonly destroy$: Observable<void>,
			@Inject(WATCHED_METACONTROLLER)
			readonly controller: MetaController
	) {
		// Обновление view, которое можно вынести отдельно в провайдер
		// чтобы не писать однотипную логику

		// if (!contentDirective) {
		// 	return;
		// }
		//
		// this.contentDirective.change$.pipe(takeUntil(this.destroy$)).subscribe(() => {
		// 	changeDetectorRef.markForCheck();
		// });
	}

	ngOnInit(): void {
	}

}
