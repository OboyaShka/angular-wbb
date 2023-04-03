import { DiExample1Component } from "@app/modules/di/examples/di-example1/di-example1.component";

const components = [
	DiExample1Component,
]

export const DI_CHILDREN_ROUTES = components.map((component, index) => ({
	path: `example${index + 1}`,
	component,
	data: {
		tabIndex: index
	}
}))
