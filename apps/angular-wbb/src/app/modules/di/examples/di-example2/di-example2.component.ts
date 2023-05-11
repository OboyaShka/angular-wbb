import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { LoggerService } from "./logger.service";
import { BetterLoggerService } from "./better-logger.service";
import { ADMIN_EMAILS, PAGE_CONFIG } from "./tokens";

@Component({
	selector: 'app-di-example2',
	templateUrl: './di-example2.component.html',
	styleUrls: ['./di-example2.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiExample2Component  {

	constructor(
			loggerService: LoggerService,
			betterLoggerService: BetterLoggerService,
			@Inject(PAGE_CONFIG) page: any, // @Inject первоочерёднее
			@Inject(ADMIN_EMAILS) emails: string[]
	) {
		loggerService.info('test!')
		betterLoggerService.info('test!')
		console.log(page)
		console.log(emails)
	}
}
