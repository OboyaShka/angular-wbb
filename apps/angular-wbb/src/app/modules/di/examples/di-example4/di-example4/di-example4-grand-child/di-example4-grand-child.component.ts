import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { Ex4AnimalServiceService } from "../../ex4-animal-service.service";

@Component({
  selector: 'app-di-example4-grand-child',
  templateUrl: './di-example4-grand-child.component.html',
  styleUrls: ['./di-example4-grand-child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		// {
		// 	provide: Ex4AnimalServiceService,
		// 	useValue: {
		// 		emoji: '🦓'
		// 	}
		// },
	]
})
export class DiExample4GrandChildComponent {

	constructor(@Optional() public animalService: Ex4AnimalServiceService) {
		if (this.animalService === null) {
			this.animalService = {
				emoji: 'null'
			}
		}
	}
}
