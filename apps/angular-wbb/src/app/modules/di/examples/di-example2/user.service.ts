import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

export class GreetingService {
	constructor(private loggerService: LoggerService, private name: string) {
		this.loggerService.info(name + ' user GreetingService')
	}

	public getMsg() {
		return this.name + ' всё окей!'
	}
}

@Injectable()
export class UserService {
	public info(): { name: string, age: number } {
		return {
			name: 'Denis',
			age: 23
		}
	}
}
