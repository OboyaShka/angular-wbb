import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FocusType, RxjsExample15FocusTypeDirective } from './rxjs-example15-focus-type.directive';

@Component({
    selector: 'app-rxjs-example15',
    templateUrl: './rxjs-example15.component.html',
    styleUrls: ['./rxjs-example15.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RxjsExample15FocusTypeDirective]
})
export class RxjsExample15Component {
    focusType: FocusType = 'blur';

    constructor() {}
}
