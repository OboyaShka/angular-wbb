import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiExample7Component } from './di-example7/di-example7.component';
import { LanguageService, LNG_TOKEN } from "./language.service";
import { FormsModule } from "@angular/forms";


@NgModule({
	declarations: [
		DiExample7Component
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class DiExample7Module {
	static forRoot(languages: string[]): ModuleWithProviders<DiExample7Module> {
		return {
			ngModule: DiExample7Module,
			providers: [
				LanguageService,
				...languages.map<Provider>(lng => ({
					provide: LNG_TOKEN,
					multi: true,
					useValue: lng
				}))
			]
		}
	}
}
