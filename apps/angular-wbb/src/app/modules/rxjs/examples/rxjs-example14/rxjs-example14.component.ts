import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Inject, ViewChildren, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { endWith, filter, map, share, shareReplay, startWith, switchMap, takeUntil, throttleTime } from 'rxjs/operators';

type Rect = Readonly<{ x: number; y: number; width: number; height: number }>;

@Component({
    selector: 'app-rxjs-example14',
    templateUrl: './rxjs-example14.component.html',
    styleUrls: ['./rxjs-example14.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample14Component {
    private readonly target$$ = new Subject<HTMLElement>();
    private readonly target$ = this.target$$.pipe(shareReplay(1));

    @ViewChildren('folder')
    folderRefs: QueryList<ElementRef<HTMLElement>>;

    @ViewChild('area')
    set colorPicker(ref: ElementRef<HTMLDivElement> | undefined) {
        if (ref) {
            this.target$$.next(ref.nativeElement);
        }
    }

    readonly folders = ['memes', 'jokes', 'tips', 'tricks'];

    readonly clientRect$ = this.target$.pipe(
        switchMap(target =>
            fromEvent<MouseEvent>(target, 'mousedown').pipe(
                switchMap(down =>
                    fromEvent<MouseEvent>(target, 'mousemove').pipe(
                        startWith(down),
                        takeUntil(fromEvent(this.documentRef, 'mouseup')),
                        map(move => ({
                            x: down.offsetX,
                            y: down.offsetY,
                            width: move.offsetX - down.offsetX,
                            height: move.offsetY - down.offsetY
                        })),
                        endWith(null),
                        share()
                    )
                )
            )
        )
    );

    readonly selected$ = this.clientRect$.pipe(
        throttleTime<any>(1000 / 30),
        filter<Rect>(Boolean),
        map(rect =>
            this.folderRefs
                .toArray()
                .filter(
                    ({ nativeElement }) =>
                        nativeElement.offsetLeft + nativeElement.offsetWidth > rect.x &&
                        nativeElement.offsetLeft < rect.x + rect.width &&
                        nativeElement.offsetTop + nativeElement.offsetHeight > rect.y &&
                        nativeElement.offsetTop < rect.y + rect.height
                )
        ),
        map(selectedFolders => selectedFolders.map(folder => folder.nativeElement.textContent?.trim())),
        startWith([])
    );

    constructor(@Inject(DOCUMENT) private documentRef: Document) {}
}
