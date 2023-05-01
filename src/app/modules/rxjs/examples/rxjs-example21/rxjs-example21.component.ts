import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
	CustomBehaviorSubject,
	CustomReplaySubject,
	CustomSubject,
	http
} from "@app/modules/rxjs/examples/rxjs-example21/rxjs-example21.custom-rx";
import {
	createDefaultObserver,
	customMap,
	customOf, customTap
} from "@app/modules/rxjs/examples/rxjs-example21/rxjs-example21.custom-operators-rx";

@Component({
	selector: 'app-rxjs-example21',
	templateUrl: './rxjs-example21.component.html',
	styleUrls: ['./rxjs-example21.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample21Component implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
		http('https://jsonplaceholder.typicode.com/users')
				.pipe(
						customMap(res => res[0]),
						customTap(() => console.log('customTap1')),
						customTap(() => console.log('customTap2'))
				)
				.subscribe(createDefaultObserver('subscriber-1'));

		http('https://jsonplaceholder.typicode.com/users')
				.subscribe(createDefaultObserver('subscriber-2'));

		const subject = new CustomSubject();
		subject.subscribe(createDefaultObserver('subscriber-3'));
		subject.subscribe(createDefaultObserver('subscriber-4'));

		http('https://jsonplaceholder.typicode.com/users')
				.pipe(customMap(res => res[0]))
				.subscribe(subject);

		const syncSubject = new CustomSubject();
		customOf(1, 2, 3, 4).subscribe(syncSubject);

		syncSubject.subscribe(createDefaultObserver('subscriber5'));
		syncSubject.subscribe(createDefaultObserver('subscriber6'));

		const replySubject = new CustomReplaySubject(3);
		customOf(1, 2, 3, 4).subscribe(replySubject);

		replySubject.subscribe(createDefaultObserver('subscriber7'));
		replySubject.subscribe(createDefaultObserver('subscriber8'));

		const behaviorSubject = new CustomBehaviorSubject(1);
		behaviorSubject.subscribe(createDefaultObserver('subscriber9'));
		customOf(1, 2, 3, 4).subscribe(behaviorSubject);
		behaviorSubject.subscribe(createDefaultObserver('subscriber10'));

		console.log(behaviorSubject.getValue())
		behaviorSubject.setValue(12)

		// publish() -> multicast(() => new Subject()) (потому нужно использовать connect() т.к возвращает ConnectableObservable)
		// publishBehavior() -> multicast(new BehaviorSubject())
		// publishReplay() -> multicast(() => new ReplaySubject(x))
		// publishLast() -> multicast(new AsyncSubject())
		// share() равнозначен multicast(() => new Subject()) + refCount()
		// shareReplay(bufferSize) | shareReplay({ refCount: true, bufferSize: 1 })

		// shareReplay vs publishReplay + refCount - при всех отписках в shareReplay создаться новый ReplaySubject и последнее значение потеряется
	}
}

