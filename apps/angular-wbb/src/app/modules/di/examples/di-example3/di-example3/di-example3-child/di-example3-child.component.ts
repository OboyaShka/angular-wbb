import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimalService, ZOO } from "../../animal.service";
import { PetService } from "../pet.service";

@Component({
	selector: 'app-di-example3-child',
	templateUrl: './di-example3-child.component.html',
	styleUrls: ['./di-example3-child.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{
			provide: AnimalService,
			useValue: {
				emoji: '🦝'
			}
		}
	],
	providers: [
		{
			provide: ZOO,
			useValue: {
				emoji: '🦝'
			},
			multi: true
		},
		PetService
	]
})
export class DiExample3ChildComponent implements OnInit {

	constructor(public emojiService: AnimalService, public petService: PetService) {
	}

	ngOnInit(): void {
	}

}
