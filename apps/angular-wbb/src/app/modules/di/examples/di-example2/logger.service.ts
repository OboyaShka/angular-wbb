import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

	public info(text: string) {
		console.log(text)
	}
}
