import { Injectable, Optional } from '@angular/core';
import { DiModule } from "../../di.module";


@Injectable({
	providedIn: DiModule,
	useFactory: (instance: SingletonService) => instance ?? new SingletonService(),
	deps: [[new Optional(), SingletonService]]
})
export class SingletonService {
	constructor() {
		console.count("SingletonService constructed");
	}
}