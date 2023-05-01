import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-css',
    templateUrl: './css.component.html',
    styleUrls: ['./css.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
