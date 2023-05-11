import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal, ZOO_TOKEN } from "./constants";
import { ZooService } from "./zoo.service";


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class DiExample5Module {
	static forRoot(animals: Animal[] = []): ModuleWithProviders<DiExample5Module> {
		return {
			ngModule: DiExample5Module,
			providers: [
				ZooService,
				...animals.map<Provider>(animal => ({
					provide: ZOO_TOKEN,
					multi: true,
					useValue: animal
				}))
			]
		}
	}

	static forFeature(animals: Animal[] = []): ModuleWithProviders<DiExample5Module> {
		return {
			ngModule: DiExample5Module,
			providers: [
				...animals.map<Provider>(animal => ({
					provide: ZOO_TOKEN,
					multi: true,
					useValue: animal
				}))
			]
		}
	}
}
