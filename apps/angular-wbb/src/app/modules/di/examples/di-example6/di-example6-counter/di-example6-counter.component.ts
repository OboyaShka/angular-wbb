import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DiExample6CounterService } from "../di-example6-counter.service";

@Component({
	selector: 'app-di-example6-counter',
	templateUrl: './di-example6-counter.component.html',
	styleUrls: ['./di-example6-counter.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		DiExample6CounterService
	]
})
export class DiExample6CounterComponent {
	constructor(public counterService: DiExample6CounterService) {
	}
}
