import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Organization {
    name: string;
    city: string;
}

@Injectable()
export class OrganizationService {
    public getOrganizationById$(_: any): Observable<Organization> {
        return of({
            name: 'Haha',
            city: 'HeHe'
        });
    }
}
