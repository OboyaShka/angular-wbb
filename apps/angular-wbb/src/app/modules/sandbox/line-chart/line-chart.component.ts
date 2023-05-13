import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { Pure } from "./pure";
import { draw } from "./draw";

@Component({
	selector: 'svg[lineChart]',
	templateUrl: './line-chart.component.html',
	styleUrls: ['./line-chart.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		preserveAspectRatio: "none"
	}
})
export class LineChartComponent implements OnChanges {
	@Input()
	lineChart: readonly [number, number][] = []

	@Input()
	x = 0

	@Input()
	y = 0

	@Input()
	width = 0

	@Input()
	height = 0

	@Input()
	smoothing = 0

	@HostBinding('attr.viewBox')
	get viewBox(): string {
		console.log('viewBox get!')
		return `${this.x} ${this.y} ${this.width} ${this.height}`
	}

	ngOnChanges() {
		console.log('change!')
	}

	get d(): string {
		return this.getD(this.lineChart, this.smoothing)
	}

	@Pure
	private getD(value: readonly [number, number][], smoothing: number): string {
		return value.reduce(
			(d, point, index) => index ? `${d} ${draw(value, index, smoothing)}` : `M ${String(point)}`, ""
		)
	}
}
