import { InjectionToken } from "@angular/core";

export interface PageConfig {
	title: string
}



export const PAGE_CONFIG = new InjectionToken<PageConfig>('page.config')

export const ADMIN_EMAILS = new InjectionToken<string[]>('admin.emails')