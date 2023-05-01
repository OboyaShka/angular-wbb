import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from './loading.service';
import { distinctUntilChanged, filter, map, share, switchMapTo } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs-example4',
    templateUrl: './rxjs-example4.component.html',
    styleUrls: ['./rxjs-example4.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LoadingService]
})
export class RxjsExample4Component {
    // public loading$: Observable<number | string>
    // public isLoading$ = new BehaviorSubject<boolean>(false)
    public readonly load$ = new Subject<void>();
    public readonly response$ = this.load$.pipe(switchMapTo(this.loadingService.load()), share());

    public readonly result$ = this.response$.pipe(
        map(res => (typeof res === 'string' ? res : null)),
        distinctUntilChanged()
    );

    readonly loadingProgress$ = this.response$.pipe(filter(Number.isFinite));

    constructor(@Inject(LoadingService) private readonly loadingService: LoadingService) {}

    onButtonClick() {
        this.load$.next();
        // this.isLoading$.next(true)
        // this.loading$ = this.loadingService.load().pipe(finalize(() => this.isLoading$.next(false)))
    }
}
