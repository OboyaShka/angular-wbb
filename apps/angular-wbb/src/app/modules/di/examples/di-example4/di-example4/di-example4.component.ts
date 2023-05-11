import { ChangeDetectionStrategy, Component, OnInit, Optional } from '@angular/core';
import { Ex4AnimalServiceService } from "../ex4-animal-service.service";

@Component({
	selector: 'app-di-example4',
	templateUrl: './di-example4.component.html',
	styleUrls: ['./di-example4.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: Ex4AnimalServiceService,
			useValue: {
				emoji: '🦄'
			}
		},
	]
})
export class DiExample4Component implements OnInit {

	constructor(@Optional() public animalService: Ex4AnimalServiceService) {
		if (this.animalService === null) {
			this.animalService = {
				emoji: 'null'
			}
		}
	}

	ngOnInit(): void {
	}

}
