import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Organization, OrganizationService } from "../di-example1.constants";

@Component({
    selector: 'di-example1-organization',
    templateUrl: './di-example1-organization.component.html',
    styleUrls: ['./di-example1-organization.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [OrganizationService]
})
export class DiExample1OrganizationComponent implements OnInit {
    organization: Organization;

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly organizationService: OrganizationService) {}

    /* The “organization” field is not defined at component creation. That is why there is a time when we can
	get “undefined”. If we have non-strict TypeScript, we break typings. Or we can write the right type: organization?:
	Organization and now we need to add several checks
	This code is harder to support. For example, next time we need one more param and we add one more subscription into
	ngOnInit. It will harder to read and understand each time because of implicit variables and unclear data flow.
	We can meet some problems with change detection and updating our component using OnPush strategy */

    ngOnInit() {
        this.activatedRoute.params
            .pipe(
                switchMap(params => {
                    const id = params.get('orgId');

                    return this.organizationService.getOrganizationById$(id);
                })
            )
            .subscribe(organization => {
                this.organization = organization;
            });
    }
}
