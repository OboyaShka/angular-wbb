import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class BetterLoggerService extends LoggerService {

	constructor() {
		super();
		this.info('BetterLoggerService is created!')
	}

	public info(text: string) {
		super.info('---' + text + '---')
	}
}
