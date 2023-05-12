import { Directive, Input } from '@angular/core';
import { ControllerDirective } from "./controller";

@Directive({
	selector: '[diExample8Content]'
})
export class DiExample8ContentDirective extends ControllerDirective {
	@Input('diExample8Content') content: string = ''

	@Input('diExample8Label') label: string = ''

	@Input('diExample8Text') text: string = ''

	constructor() {
		super()
	}

}
