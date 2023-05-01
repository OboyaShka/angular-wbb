import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Organization } from "../di-example1.constants";
import { ORGANIZATION_INFO, ORGANIZATION_PROVIDERS } from "./di-example1v3-organization.providers";

@Component({
    selector: 'di-example1v3-organization',
    templateUrl: './di-example1v3-organization.component.html',
    styleUrls: ['./di-example1v3-organization.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ORGANIZATION_PROVIDERS]
})
export class DiExample1v3OrganizationComponent {
    constructor(@Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>) {}
}
