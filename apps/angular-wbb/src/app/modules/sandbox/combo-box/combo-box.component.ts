import { ChangeDetectionStrategy, Component, ContentChild, HostListener, Input, OnInit } from '@angular/core';
import { NgControl } from "@angular/forms";

function limit(value: number, max: number): number {
    return Math.max(Math.min(value || 0, max), 0)
}

@Component({
    selector: 'combo-box',
    templateUrl: './combo-box.component.html',
    styleUrls: ['./combo-box.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComboBoxComponent implements OnInit {
    @Input()
    items: readonly string[] = []

    constructor() {
    }

    ngOnInit(): void {
    }

    private index = NaN

    @ContentChild(NgControl)
    public readonly control: NgControl;

    get open(): boolean {
        return !isNaN(this.index)
    }

    toggle($event: Event) {
        $event.preventDefault()
        this.index = this.open ? NaN : 0
    }

    isActive(index: number):boolean {
        return index === this.clampedIndex
    }

    private get clampedIndex(): number {
        return limit(this.index, this.filteredItems.length - 1)
    }

    private get filteredItems(): readonly string[] {
        return this.items
    }

    onMouseEnter(index: number) {
        this.index = index
    }

    @HostListener('keydown.esc')
    @HostListener('focusout')
    close() {
        this.index = NaN
    }

    @HostListener('keydown.arrowDown', ['$event', '1'])
    @HostListener('keydown.arrowUp', ['$event', '-1'])
    onArrow($event: Event, step: number) {
        $event.preventDefault()
        this.index = this.open ? limit(this.clampedIndex + step, this.filteredItems.length - 1) : 0
    }
}
