import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'rxjs-example1',
    templateUrl: './rxjs-example1.component.html',
    styleUrls: ['./rxjs-example1.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample1Component {
    public name$ = new BehaviorSubject<string | null>(null);

    constructor() {}

    focusWithin($event: Element | null) {
        this.name$.next($event?.tagName || 'NO VALUE!');
    }
}
