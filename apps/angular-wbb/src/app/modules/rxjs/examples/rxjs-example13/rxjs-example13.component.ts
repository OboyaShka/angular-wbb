import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-rxjs-example13',
    templateUrl: './rxjs-example13.component.html',
    styleUrls: ['./rxjs-example13.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample13Component {
    scale = 1;

    get transform(): string {
        return `scale(${this.scale})`;
    }

    get height(): number {
        return this.scale * 100;
    }

    onElastic(scale: number) {
        this.scale = Math.max(scale, 0.5);
    }
}
