import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { Ex4AnimalServiceService } from "../../ex4-animal-service.service";

@Component({
	selector: 'app-di-example4-child',
	templateUrl: './di-example4-child.component.html',
	styleUrls: ['./di-example4-child.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{
			provide: Ex4AnimalServiceService,
			useValue: {
				emoji: '🐸'
			}
		},
	]
})
export class DiExample4ChildComponent {

	constructor(@Optional() public animalService: Ex4AnimalServiceService) {
		if (this.animalService === null) {
			this.animalService = {
				emoji: 'null'
			}
		}
	}
}
