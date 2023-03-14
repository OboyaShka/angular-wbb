import { Directive, Inject } from '@angular/core';
import { FocusWithinService } from "@app/modules/rxjs/examples/rxjs-example1/focus-within/focus-within.service";
import { Observable } from "rxjs";

@Directive({
    selector: '[focusWithin]',
    outputs: ['focusWithin'],
    providers: [FocusWithinService]
})
export class FocusWithinDirective {
    constructor(@Inject(FocusWithinService) readonly focusWithin: Observable<Element | null>) {}
}
