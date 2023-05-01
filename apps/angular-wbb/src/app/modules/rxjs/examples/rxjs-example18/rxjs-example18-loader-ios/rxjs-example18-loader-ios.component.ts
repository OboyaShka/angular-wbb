import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const LOADED_STEP = 8;
const ROTATE_X_STEP = 30;

@Component({
    selector: 'loader-ios',
    templateUrl: './rxjs-example18-loader-ios.component.html',
    styleUrls: ['./rxjs-example18-loader-ios.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample18LoaderIosComponent {
    @Input()
    pulled = 0;

    readonly steps = 12;

    get finished(): boolean {
        return this.pulled >= 100;
    }

    isShown(index: number): boolean {
        return this.pulled > (index + 1) * LOADED_STEP;
    }

    calculateTransform(index: number): string {
        return `rotate(${index * ROTATE_X_STEP} 50 50)`;
    }

    calculateAnimationBegin(index: number): string {
        return `${(index * LOADED_STEP) / 100}s`;
    }
}
