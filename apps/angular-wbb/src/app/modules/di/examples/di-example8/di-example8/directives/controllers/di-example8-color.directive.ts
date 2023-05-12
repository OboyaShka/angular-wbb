import { Directive, forwardRef, InjectionToken, Input } from '@angular/core';
import { ControllerDirective } from "../controller";

export const EXAMPLE8_COLOR = new InjectionToken<DiExample8ColorDirective>('EXAMPLE8_COLOR', {
	factory: () => diExample8ColorFactory()
})

function diExample8ColorFactory() {
	console.log('color factory!')
	return new DiExample8ColorDirective
}

@Directive({
	selector: '[diExample8Color]',
	providers: [
		{
			provide: EXAMPLE8_COLOR,
			useExisting: forwardRef(() => {
				console.log('color created!')
				return DiExample8ColorDirective
			})
		}
	]
})
export class DiExample8ColorDirective extends ControllerDirective {
	@Input() public diExample8Color = 'red'
}
