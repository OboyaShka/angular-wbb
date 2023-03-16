import { NgModule } from "@angular/core";
import { FocusWithinDirective } from "@app/modules/rxjs/examples/rxjs-example1/focus-within/focus-within.directive";

@NgModule({
    declarations: [
        FocusWithinDirective
    ],
    exports: [
        FocusWithinDirective
    ]
})
export class FocusWithinModule {}