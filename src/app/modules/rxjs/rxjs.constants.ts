import { InjectionToken } from "@angular/core";
import { RxjsExample1Component } from "@app/modules/rxjs/examples/rxjs-example1/rxjs-example1.component";
import { RxjsExample2Component } from "@app/modules/rxjs/examples/rxjs-example2/rxjs-example2.component";
import { RxjsExample3Component } from "@app/modules/rxjs/examples/rxjs-example3/rxjs-example3.component";
import { RxjsExample4Component } from "@app/modules/rxjs/examples/rxjs-example4/rxjs-example4.component";
import { RxjsExample5Component } from "@app/modules/rxjs/examples/rxjs-example5/rxjs-example5.component";
import { RxjsExample6Component } from "@app/modules/rxjs/examples/rxjs-example6/rxjs-example6.component";
import { RxjsExample7Component } from "@app/modules/rxjs/examples/rxjs-example7/rxjs-example7.component";
import { RxjsExample8Component } from "@app/modules/rxjs/examples/rxjs-example8/rxjs-example8.component";
import { RxjsExample9Component } from "@app/modules/rxjs/examples/rxjs-example9/rxjs-example9.component";
import { RxjsExample10Component } from "@app/modules/rxjs/examples/rxjs-example10/rxjs-example10.component";
import { RxjsExample11Component } from "./examples/rxjs-example11/rxjs-example11.component";

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
	},
	{
		path: 'example7',
		component: RxjsExample7Component,
		data: {
			tabIndex: 6
		}
	},
	{
		path: 'example8',
		component: RxjsExample8Component,
		data: {
			tabIndex: 7
		}
	},
	{
		path: 'example9',
		component: RxjsExample9Component,
		data: {
			tabIndex: 8
		}
	},
	{
		path: 'example10',
		component: RxjsExample10Component,
		data: {
			tabIndex: 9
		}
	},
	{
		path: 'example11',
		component: RxjsExample11Component,
		data: {
			tabIndex: 10
		}
	}
]
