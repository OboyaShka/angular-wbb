import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Organization, OrganizationService } from "../di-example1.constants";

// my lvl
@Component({
    selector: 'di-example1v2-organization',
    templateUrl: './di-example1v2-organization.component.html',
    styleUrls: ['./di-example1v2-organization.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [OrganizationService]
})
export class DiExample1v2OrganizationComponent {
    readonly organization$: Observable<Organization> = this.activatedRoute.queryParams.pipe(
        switchMap(params => {
            const id = params['id'];
            return this.organizationService.getOrganizationById$(id);
        })
    );

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly organizationService: OrganizationService) {}
}
