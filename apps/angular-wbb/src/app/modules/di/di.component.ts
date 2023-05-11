import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DI_CHILDREN_ROUTES } from "./di.constants";
import { ZooService } from "./examples/di-example5/zoo.service";
@Component({
    selector: 'di',
    templateUrl: './di.component.html',
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiComponent implements OnInit, OnDestroy {
    public activeItemIndex$ = new BehaviorSubject<number | null>(null);
    public examples = DI_CHILDREN_ROUTES;
    private destroy$ = new Subject<void>();

    constructor(private route: ActivatedRoute, public router: Router, public zooService: ZooService) {
        (
            router.events.pipe(
                takeUntil(this.destroy$),
                filter(event => event instanceof NavigationStart)
            ) as Observable<NavigationStart>
        ).subscribe(navStart => navStart.url.split('/').length === 2 && this.activeItemIndex$.next(null));
		console.log(this.zooService)

	}

    ngOnInit(): void {
        this.activeItemIndex$.next(this.route.snapshot.children.length ? this.route.snapshot.children[0].data['tabIndex'] : null);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }

    onClick(settings: string) {
        console.log(settings);
    }

    activeTab(tabNumber: number): void {
        this.activeItemIndex$.next(tabNumber);
    }
}
