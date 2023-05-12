import { Directive } from '@angular/core';
import { Ex4AnimalServiceService } from "../ex4-animal-service.service";

@Directive({
	selector: '[appBear]',
	providers: [
		{
			provide: Ex4AnimalServiceService,
			useValue: {
				emoji: '🐻'
			}
		},
		// {
		// 	provide: THEME,
		// 	useExisting: forwardRef(() => DarkThemeDirective) // Переопределение токена самой директивой
		// }
	]
})
export class BearDirective {

	constructor() {
	}

}
