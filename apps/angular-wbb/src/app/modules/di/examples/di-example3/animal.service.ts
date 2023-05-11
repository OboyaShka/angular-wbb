import { Injectable, InjectionToken } from '@angular/core';

export const ZOO = new InjectionToken('zoo')

@Injectable({
	providedIn: 'root'
})
export class AnimalService {
	emoji: string = '🐵'
}
