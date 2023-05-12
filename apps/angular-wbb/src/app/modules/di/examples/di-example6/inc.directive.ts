import { Directive, HostListener } from '@angular/core';
import { DiExample6CounterService } from "./di-example6-counter.service";

@Directive({
  selector: '[incDirective]'
})
export class IncDirective {
	@HostListener('click')
	onClick() {
		this.counterService.inc()
	}

	constructor(public counterService: DiExample6CounterService) {}

}
