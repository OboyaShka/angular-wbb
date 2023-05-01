import { Directive, ElementRef, Inject, Output } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { map, mapTo } from 'rxjs/operators';

@Directive({
    selector: '[elasticSticky]'
})
export class RxjsExample13ElasticStickyDirective {
    private readonly initial = this.elementRef.nativeElement.getBoundingClientRect().top;

    @Output()
    elasticSticky: Observable<number> = fromEvent(this.documentRef, 'scroll').pipe(mapTo(this.initial), map(this.getScale.bind(this)));

    constructor(@Inject(DOCUMENT) private readonly documentRef: Document, @Inject(ElementRef) private readonly elementRef: ElementRef) {}

    private get top(): number {
        return this.documentRef.documentElement.scrollTop;
    }

    private get height(): number {
        return this.elementRef.nativeElement.offsetHeight;
    }

    private getScale(top: number): number {
        return clamp((this.height - this.top + top) / this.height, 0, 1);
    }
}

function clamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
}
