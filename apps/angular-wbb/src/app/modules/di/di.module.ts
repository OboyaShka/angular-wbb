import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiTabsModule } from '@taiga-ui/kit';
import {
	DiExample1OrganizationComponent
} from './examples/di-example1/di-example1-organiztaion/di-example1-organization.component';
import {
	DiExample1v2OrganizationComponent
} from './examples/di-example1/di-example1v2-organization/di-example1v2-organization.component';
import {
	DiExample1v3OrganizationComponent
} from './examples/di-example1/di-example1v3-organization/di-example1v3-organization.component';
import { DiRoutingModule } from "./di-routing.module";
import { DiExample1Component } from "./examples/di-example1/di-example1.component";
import { DiComponent } from "./di.component";
import { DiExample2Component } from './examples/di-example2/di-example2.component';
import { LoggerService } from "./examples/di-example2/logger.service";
import { BetterLoggerService } from "./examples/di-example2/better-logger.service";
import { ADMIN_EMAILS, PAGE_CONFIG } from "./examples/di-example2/tokens";
import { GreetingService, UserService } from "./examples/di-example2/user.service";
import { DiExample3Module } from "./examples/di-example3/di-example3.module";
import { DiExample4Module } from "./examples/di-example4/di-example4.module";
import { DiExample5Module } from "./examples/di-example5/di-example5.module";
import { DiExample6Module } from "./examples/di-example6/di-example6.module";
import { DiExample7Module } from "./examples/di-example7/di-example7.module";
import { DiExample8Module } from "./examples/di-example8/di-example8.module";
import { DiExample9Component } from './examples/di-example9/di-example9.component';


@NgModule({
	declarations: [DiComponent, DiExample1Component, DiExample1OrganizationComponent, DiExample1v2OrganizationComponent, DiExample1v3OrganizationComponent, DiExample2Component, DiExample9Component],
	imports: [CommonModule, RouterModule, TuiTabsModule, DiRoutingModule, DiExample3Module, DiExample4Module,
		DiExample5Module.forRoot([
			{
				emoji: '🦁'
			},
			{
				emoji: '🐅'
			},
			{
				emoji: '🐖'
			}
		]),
		DiExample5Module.forFeature([
			{
				emoji: '🐏'
			}
		]),
		DiExample6Module,
		DiExample7Module.forRoot(['ru', 'eng', 'espaniolo']),
		DiExample8Module
	],
	providers: [
		BetterLoggerService,
		// {
		// 	provide: BetterLoggerService,
		// 	useValue: {info: (_: string) => {}}
		// },
		{
			provide: LoggerService,
			useClass: BetterLoggerService
		},
		{
			provide: PAGE_CONFIG,
			useValue: {title: 'Конфиг!'}
		},
		UserService,
		{
			provide: GreetingService,
			deps: [LoggerService, UserService],
			useFactory: (
					loggerService: LoggerService,
					userService: UserService
			) => {
				return new GreetingService(loggerService, userService.info().name)
			}
		},
		{
			provide: ADMIN_EMAILS,
			useValue: 'test@test.ru',
			multi: true
		},
		{
			provide: ADMIN_EMAILS,
			useValue: 'test2@test.ru',
			multi: true
		}
	]
	// useExisting - Если уже есть класс, используй старый
	// Подмена логгера
	// providers: [LoggerService]
})
export class DiModule {
}
