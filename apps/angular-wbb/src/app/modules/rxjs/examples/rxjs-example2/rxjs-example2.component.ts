import { Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy, InjectionToken, inject } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { distinctUntilChanged, map, share, startWith } from 'rxjs/operators';
import { PAGE_VISIBILITY_PROVIDE_TOKEN } from "../../rxjs.constants";

export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>('Shared Observable based on `document visibility changed`', {
    factory: () => {
        const documentRef = inject(DOCUMENT);
        return fromEvent(documentRef, 'visibilitychange').pipe(
            startWith(0),
            map(() => documentRef.visibilityState !== 'hidden'),
            distinctUntilChanged(),
            share()
        );
    }
});

@Component({
    selector: 'rxjs-example2',
    templateUrl: './rxjs-example2.component.html',
    styleUrls: ['./rxjs-example2.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample2Component implements OnInit, OnDestroy {
    private subscription = new Subscription();

    constructor(
        @Inject(PAGE_VISIBILITY_PROVIDE_TOKEN) private pageVisibility: Observable<boolean>,
        @Inject(PAGE_VISIBILITY) private pageVisibilityRef: Observable<boolean>
    ) {}

    ngOnInit(): void {
        this.subscription.add(this.pageVisibility.pipe().subscribe(bool => console.log('my obs', bool)));
        this.subscription.add(this.pageVisibilityRef.pipe().subscribe(bool => console.log('ref obs', bool)));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
