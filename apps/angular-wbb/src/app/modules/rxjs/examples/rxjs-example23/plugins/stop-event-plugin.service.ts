import { Injectable, NgZone, Predicate, Provider } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from "@angular/platform-browser";
import { EMPTY } from "rxjs";
import { switchMap, take } from "rxjs/operators";

@Injectable()
export class StopEventPluginService {
	supports(eventName: string): boolean {
		return eventName.split('.').includes('stop')
	}

	addEventListener(element: HTMLElement, event: string, handler: Function): Function {
		const wrapper = (event: Event) => {
			event.stopPropagation()
			handler(event)
		}

		return (this as any).manager.addEventListener(
				element,
				event.split('.').filter(name => name !== 'stop').join('.'),
				wrapper
		)
	}
}

@Injectable()
export class PreventDefaultPluginService {
	supports(eventName: string): boolean {
		return eventName.split('.').includes('prev')
	}

	addEventListener(element: HTMLElement, event: string, handler: Function): Function {
		const wrapper = (event: Event) => {
			event.preventDefault()
			handler(event)
		}

		return (this as any).manager.addEventListener(
				element,
				event.split('.').filter(name => name !== 'prev').join('.'),
				wrapper
		)
	}
}

@Injectable()
export class SilentEventPlugin {
	supports(event: string): boolean {
		return event.split('.').includes('silent');
	}

	addEventListener(
			element: HTMLElement,
			event: string,
			handler: Function
	): Function {
		return (this as any).manager.getZone().runOutsideAngular(() =>
				(this as any).manager.addEventListener(
						element,
						event
							.split('.')
							.filter(v => v !== 'silent')
							.join('.'),
						handler,
				),
		);
	}
}

@Injectable()
export class ZoneEventPlugin {
	supports(event: string): boolean {
		return event.split('.').includes('init');
	}

	addEventListener(
			_element: HTMLElement,
			_event: string,
			handler: Function
	): Function {
		const zone = (this as any).manager.getZone();
		const subscription = zone.onStable.subscribe(() => {
			subscription.unsubscribe();
			handler(zone);
		});

		return () => {};
	}
}


@Injectable()
export class ObservablePlugin {
	supports(event: string): boolean {
		return event.split('.').includes('init');
	}

	addEventListener(element: HTMLElement, event: string): Function {
		element[event] = EMPTY;

		const method = (this as any).getMethod(element, event);
		const sub = (this as any).manager
				.getZone()
				.onStable.pipe(
						take(1),
						switchMap(() => element[event]),
				)
				.subscribe(method);


		return () => sub.unsubscribe();
	}
}




export function shouldCall<T>(
		predicate: Predicate<T>
): MethodDecorator {
	return (_, key, desc: PropertyDescriptor) => {
		// Сохраняем изначальный метод метод
		const { value } = desc;

		// переопределяем его новым
		desc.value = function() {
			// Достаём зону из предыдущего хендлера
			const zone = arguments[0] as NgZone;
			console.log(zone)

			// Переопределяем новое свойство
			Object.defineProperty(this, key, {
				//Изменяея его value
				value(this: T, ...args: any[]) { // this - context зоны
					if (predicate.apply(this, args as any)) { // Если условие выполяется
						value.apply(this, args);
						// zone.run(() => { 				// Запускаем его в зоне
						//
						// });
					}
				},
			});
		};
	};
}


export const PLUGIN_PROVIDERS: Provider[] = [
	{
		provide: EVENT_MANAGER_PLUGINS,
		multi: true,
		useValue: StopEventPluginService
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		multi: true,
		useValue: PreventDefaultPluginService
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		multi: true,
		useValue: SilentEventPlugin
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		multi: true,
		useValue: ZoneEventPlugin
	},
	{
		provide: EVENT_MANAGER_PLUGINS,
		multi: true,
		useValue: ObservablePlugin
	}
]


