import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from "rxjs";
import { map, reduce, scan, share, startWith } from "rxjs/operators";

const registerSeats = (selected: Set<number>, seat: number) => {
	if (selected.has(seat)) {
		selected.delete(seat);
	} else {
		selected.add(seat);
	}

	return selected;
};


@Component({
	selector: 'app-rxjs-example6',
	templateUrl: './rxjs-example6.component.html',
	styleUrls: ['./rxjs-example6.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample6Component {
	readonly noneMessage = "nothing";

	readonly selectSeat$ = new Subject<number>();

	readonly selectedMessage$ = this.selectSeat$.pipe(
		scan(registerSeats, new Set<number>()),
		startWith(new Set<number>()),
		map(set => (set.size ? Array.from(set).join(", ") : this.noneMessage)),
		share()
	);

	readonly cost$ = this.selectSeat$.pipe(
		reduce(registerSeats, new Set()),
		map(selected => selected.size * 3)
	);
}
