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
import { RxjsExample12Component } from "@app/modules/rxjs/examples/rxjs-example12/rxjs-example12.component";
import { RxjsExample13Component } from "@app/modules/rxjs/examples/rxjs-example13/rxjs-example13.component";
import { RxjsExample14Component } from "@app/modules/rxjs/examples/rxjs-example14/rxjs-example14.component";
import { RxjsExample15Component } from "@app/modules/rxjs/examples/rxjs-example15/rxjs-example15.component";
import { RxjsExample16Component } from "./examples/rxjs-example16/rxjs-example16.component";
import { RxjsExample17Component } from "@app/modules/rxjs/examples/rxjs-example17/rxjs-example17.component";

export const PAGE_VISIBILITY_PROVIDE_TOKEN = new InjectionToken('rxjs-example-2 page visibility service token')

const components = [
	RxjsExample1Component,
	RxjsExample2Component,
	RxjsExample3Component,
	RxjsExample4Component,
	RxjsExample5Component,
	RxjsExample6Component,
	RxjsExample7Component,
	RxjsExample8Component,
	RxjsExample9Component,
	RxjsExample10Component,
	RxjsExample11Component,
	RxjsExample12Component,
	RxjsExample13Component,
	RxjsExample14Component,
	RxjsExample15Component,
	RxjsExample16Component,
	RxjsExample17Component
]

export const RXJS_CHILDREN_ROUTES = Array(components.length).fill(null).map((_, index) => ({
	path: `example${index + 1}`,
	component: components[index],
	data: {
		tabIndex: index
	}
}))
