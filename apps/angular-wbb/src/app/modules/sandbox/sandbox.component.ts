import { Component } from "@angular/core";

@Component({
	templateUrl: 'sandbox.component.html',
	styleUrls: ['sandbox.component.less']
})
export class SandboxComponent {
	x = 200;

	width = 400;

    value = '';

    items = [
        'Abcasdasd1',
        'hdtghers2',
        'cvbnwet3',
        '12sdgfftgh4',
        'mnESwegwrg5',
        'asadeawrt6'
    ]

	smoothing = 0;

	readonly lineChart: readonly [number, number][] = [
		[0, 60],
		[50, 50],
		[100, 75],
		[150, 50],
		[200, 150],
		[250, 155],
		[300, 190],
		[350, 90],
		[400, 110],
		[450, 40],
		[500, 50],
		[550, 80],
		[600, 130],
		[650, 120],
		[700, 140],
		[750, 100],
		[800, 90],
	];
}