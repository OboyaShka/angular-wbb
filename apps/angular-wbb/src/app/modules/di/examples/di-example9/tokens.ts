import { inject, InjectionToken } from "@angular/core";
import { DOCUMENT } from "@angular/common";

// inject происходит из рут компонента
export const TEST_INJECTOR_TOKEN = new InjectionToken<string>('deps', {
	factory: () => {
		const document = inject(DOCUMENT, {
			optional: true,
		})

		console.log('token created!', document)

		return document?.URL || ''
	}
})