import { InjectionToken } from "@angular/core";
import { RxjsExample1Component } from "@app/modules/rxjs/examples/rxjs-example1/rxjs-example1.component";
import { RxjsExample2Component } from "@app/modules/rxjs/examples/rxjs-example2/rxjs-example2.component";
import { RxjsExample3Component } from "@app/modules/rxjs/examples/rxjs-example3/rxjs-example3.component";
import { RxjsExample4Component } from "@app/modules/rxjs/examples/rxjs-example4/rxjs-example4.component";
import { RxjsExample5Component } from "@app/modules/rxjs/examples/rxjs-example5/rxjs-example5.component";
import { RxjsExample6Component } from "@app/modules/rxjs/examples/rxjs-example6/rxjs-example6.component";

export const PAGE_VISIBILITY_PROVIDE_TOKEN = new InjectionToken('rxjs-example-2 page visibility service token')

export const RXJS_CHILDREN_ROUTES = [
	{
		path: 'example1',
		component: RxjsExample1Component,
		data: {
			tabIndex: 0
		}
	},
	{
		path: 'example2',
		component: RxjsExample2Component,
		data: {
			tabIndex: 1
		}
	},
	{
		path: 'example3',
		component: RxjsExample3Component,
		data: {
			tabIndex: 2
		}
	},
	{
		path: 'example4',
		component: RxjsExample4Component,
		data: {
			tabIndex: 3
		}
	},
	{
		path: 'example5',
		component: RxjsExample5Component,
		data: {
			tabIndex: 4
		}
	},
	{
		path: 'example6',
		component: RxjsExample6Component,
		data: {
			tabIndex: 5
		}
	}
]
