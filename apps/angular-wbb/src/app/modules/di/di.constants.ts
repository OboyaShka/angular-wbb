import { DiExample1Component } from "./examples/di-example1/di-example1.component";
import { DiExample2Component } from "./examples/di-example2/di-example2.component";
import { DiExample3Component } from "./examples/di-example3/di-example3/di-example3.component";
import { DiExample4Component } from "./examples/di-example4/di-example4/di-example4.component";
import { DiExample7Component } from "./examples/di-example7/di-example7/di-example7.component";
import { DiExample8Component } from "./examples/di-example8/di-example8/di-example8.component";
import { DiExample9Component } from "./examples/di-example9/di-example9.component";

const components = [
	DiExample1Component,
	DiExample2Component,
	DiExample3Component,
	DiExample4Component,
	DiExample7Component,
	DiExample7Component,
	DiExample7Component,
	DiExample8Component,
	DiExample9Component,
];

export const DI_CHILDREN_ROUTES = components.map((component, index) => ({
	path: `example${index + 1}`,
	component,
	data: {
		tabIndex: index
	}
}));
