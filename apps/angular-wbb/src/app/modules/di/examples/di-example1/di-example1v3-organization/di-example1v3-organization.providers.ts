// token to access a stream with the information you need
import { InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Organization, OrganizationService } from '../di-example1.constants';

export const ORGANIZATION_INFO = new InjectionToken<Observable<Organization>>('A stream with current organization information');

// deps: [[new Decorator(), new Decorator(),..., TOKEN]] для декораторов

export const ORGANIZATION_PROVIDERS: Provider[] = [
    {
        provide: ORGANIZATION_INFO,
        deps: [ActivatedRoute, OrganizationService],
        useFactory: organizationFactory
    },
    OrganizationService
];

export function organizationFactory({ queryParams }: ActivatedRoute, organizationService: OrganizationService): Observable<Organization> {
    return queryParams.pipe(
        switchMap(params => {
            const id = params['id'];
            return organizationService.getOrganizationById$(id);
        })
    );
}
