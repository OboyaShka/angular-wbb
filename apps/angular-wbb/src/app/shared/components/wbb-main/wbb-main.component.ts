import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-wbb-main',
    templateUrl: './wbb-main.component.html',
    styleUrls: ['./wbb-main.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WbbMainComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
