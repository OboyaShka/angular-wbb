import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnDestroy } from '@angular/core';
import { forkJoin, fromEvent, Subscription } from 'rxjs';
import { map, mergeMap, switchMapTo, take, tap } from 'rxjs/operators';

@Directive({
    selector: '[ripple]'
})
export class RxjsExample20RippleDirective implements OnDestroy {
    readonly subscription: Subscription;

    constructor(@Inject(DOCUMENT) documentRef: Document, @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>) {
        this.subscription = fromEvent<MouseEvent>(nativeElement, 'mousedown')
            .pipe(
                map(event => {
                    const rect = nativeElement.getBoundingClientRect();
                    const radius = getRadius(event.offsetX, event.offsetY, rect);
                    const ripple = documentRef.createElement('div');

                    ripple.className = 'ripple';
                    ripple.setAttribute('style', getRippleStyle(event, radius));

                    return ripple;
                }),
                tap(ripple => nativeElement.appendChild(ripple)),
                mergeMap(ripple =>
                    forkJoin([fromEvent(documentRef, 'mouseup').pipe(take(1)), fromEvent(ripple, 'animationend').pipe(take(1))]).pipe(
                        tap(() => (ripple.style.animationName = 'rippleOff')),
                        switchMapTo(fromEvent(ripple, 'animationend').pipe(take(1))),
                        tap(() => nativeElement.removeChild(ripple))
                    )
                )
            )
            .subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

function getRippleStyle({ offsetX, offsetY }: MouseEvent, radius: number): string {
    const size = radius * 2;
    const x = offsetX - radius;
    const y = offsetY - radius;

    return `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
  `;
}

function getRadius(x: number, y: number, { left, top, right, bottom }: DOMRect): number {
    return Math.max(
        ...[
            [left, top],
            [left, bottom],
            [right, top],
            [right, bottom]
        ].map(([a, b]) => getDistance(x + left, y + top, a, b))
    );
}

function getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
