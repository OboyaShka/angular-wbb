import { Directive } from '@angular/core';
import { AnimalService, ZOO } from "../animal.service";

@Directive({
	selector: '[appCroko]',
	providers: [
		{
			provide: AnimalService,
			useValue: {emoji: '🐊'}
		},
		{
			provide: ZOO,
			useValue: {
				emoji: '🐊'
			},
			multi: true
		}
	]
})
export class CrokoDirective {

	constructor() {
	}

}
