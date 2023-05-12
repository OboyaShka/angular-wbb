import { Directive, forwardRef, InjectionToken, Input } from '@angular/core';
import { ControllerDirective } from "../controller";

export const EXAMPLE8_EMOJI = new InjectionToken('EXAMPLE8_EMOJI', {
	factory: () => diExample8EmojiFactory()
})

export function diExample8EmojiFactory() {
	console.log('emoji factory!') // Срабатывает, если директивы нет в вёрстке
	return new DiExample8EmojiDirective()
}

@Directive({
	selector: '[diExample8Emoji]',
	providers: [
		{
			provide: EXAMPLE8_EMOJI,
			useExisting: forwardRef(() => {
				console.log('emoji created') // Срабатывает, если директивы есть
				return DiExample8EmojiDirective
			})
		}
	]
})
export class DiExample8EmojiDirective extends ControllerDirective {

	@Input() public diExample8Emoji = '😎'
}
