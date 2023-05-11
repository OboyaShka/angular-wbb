import { InjectionToken } from "@angular/core";

export const ZOO_TOKEN = new InjectionToken('zoo-token')

export interface Animal {
	emoji: string
}