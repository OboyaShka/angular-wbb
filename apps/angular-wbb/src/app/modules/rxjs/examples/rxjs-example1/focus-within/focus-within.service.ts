import { ElementRef, Inject, Injectable } from '@angular/core';
import { defer, fromEvent, merge, Observable, of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, mapTo } from 'rxjs/operators';

@Injectable()
export class FocusWithinService extends Observable<Element | null> {
    constructor(@Inject(DOCUMENT) documentRef: Document, { nativeElement }: ElementRef<HTMLElement>) {
        merge(
            defer(() => of(nativeElement.contains(documentRef.activeElement))),
            fromEvent(nativeElement, 'focusin').pipe(mapTo(true)),
            fromEvent<FocusEvent>(nativeElement, 'focusout').pipe(map(({ relatedTarget }) => nativeElement.contains(relatedTarget as Node)))
        ).pipe(distinctUntilChanged());

        merge(
            defer(() => of(documentRef.activeElement)),
            fromEvent<FocusEvent>(nativeElement, 'focusin').pipe(map(({ target }) => target as Element | null)),
            fromEvent<FocusEvent>(nativeElement, 'focusout').pipe(map(({ relatedTarget }) => relatedTarget as Element | null))
        ).pipe(
            map((element: Element | null) => (element && nativeElement.contains(element) ? element : null)),
            distinctUntilChanged()
        );

        const focused$ = merge(fromEvent(documentRef, 'focusin'), fromEvent(documentRef, 'focusout'), of(null)).pipe(
            debounceTime(0),
            map(() => (nativeElement.contains(documentRef.activeElement) ? documentRef.activeElement : null)),
            distinctUntilChanged()
        );

        super(subscriber => focused$.subscribe(subscriber));
    }
}
