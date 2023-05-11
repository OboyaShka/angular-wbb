import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiExample3Component } from './di-example3/di-example3.component';
import { AnimalService, ZOO } from "./animal.service";
import { DiExample3ChildComponent } from './di-example3/di-example3-child/di-example3-child.component';
import { DiExample3GrandChildComponent } from './di-example3/di-example3-grand-child/di-example3-grand-child.component';
import { CrokoDirective } from './di-example3/croko.directive';

// Иерархия иньекторов
// NullInjector если до этого провайдер не нашёлся выкидывает ошибку
// ModuleInjector для platform (объединение приложений)
// ModuleInjector root общий для приложения
// ModuleInjector каждого модуля
// Element Injectors - создаётся для каждого Component, Directive и имеет древовидную связь

// Элемент может провайдить сервисы на уровне своего Injector'а. Создаются новые объекты
// Удаление элемента удаляет Injector + предоставленные сервисы
// При этом существует 2 инъектора Host (providers) и View (viewProviders)

// провайдеры, добавленные в providers, доступны как во view компонента, в которой они объявлены, так и для контента,
// который передан компоненте. Тогда как viewProviders, как и заложено в названии, делает сервисы видимым
// только для вью и закрывает их для контента

// При этом инъектор директивы сильнее инъектора компонента


// ----
// Решения зависимости
// 1) Injector элемента
// 2) Поиск в Injector'ах родителей по дереву компонентов до корневого viewProviders -> providers
// 3) Возвращается в компонент для идентификации модуля
// 4) Поиск ближайшего ленивого модуля и так до корневого
// 5) Платформа
// 6) NullInjector если @Optional иначе исключение

// PetService
// При провайде в компонент, сервису нужен AnimalService, который уже запровайжен на уровне компонента, поэтому выше он не поднимается

@NgModule({
	declarations: [
		DiExample3Component,
		DiExample3ChildComponent,
		DiExample3GrandChildComponent,
		CrokoDirective
	],
	imports: [
		CommonModule
		// Модули, которые провайдят другие значения будет перезатирать друг друга и останется только последний
		// При этом провайдеры этого модуля имеют приоритет
		// {
		// 	provide: AnimalService,
		// 	useValue: {
		// 		emoji: 'any'
		// 	}
		// }
	],
	exports: [
		DiExample3GrandChildComponent
	],
	// NgModule перебивает root сервиса
	providers: [
		{
			provide: AnimalService,
			useValue: {
				emoji: '🦁'
			}
		},
		{
			provide: ZOO,
			useValue: {
				emoji: '🦁'
			},
			multi: true
		}
	]
})
export class DiExample3Module {
}
