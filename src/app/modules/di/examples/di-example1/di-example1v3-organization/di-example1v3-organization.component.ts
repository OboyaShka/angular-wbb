import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import {
	ORGANIZATION_INFO,
	ORGANIZATION_PROVIDERS
} from "@app/modules/di/examples/di-example1/di-example1v3-organization/di-example1v3-organization.providers";
import { Observable } from "rxjs";
import { Organization } from "@app/modules/di/examples/di-example1/di-example1.constants";

@Component({
	selector: 'di-example1v3-organization',
	templateUrl: './di-example1v3-organization.component.html',
	styleUrls: ['./di-example1v3-organization.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ORGANIZATION_PROVIDERS],
})
export class DiExample1v3OrganizationComponent {
	constructor(
		@Inject(ORGANIZATION_INFO) readonly organization$: Observable<Organization>,
	) {
	}
}