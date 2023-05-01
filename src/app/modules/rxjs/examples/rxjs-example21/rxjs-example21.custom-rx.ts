import { Subject } from "rxjs";

export class CustomObservable {
	constructor(private subscriptionFn: (observer: CustomObserver) => any) {
	}

	subscribe(observer: CustomObserver) {
		return this.subscriptionFn(observer)
	}

	pipe(...operators) {
		return operators.reduce((source, next) => next(source), this);
	}

	unsubscribe() {
	}
}

export class CustomSubject extends CustomObservable implements CustomObserver {
	private observers: CustomObserver[] = [];

	constructor() {
		super(() => {
		});
	}

	subscribe(observer: CustomObserver) {
		this.observers.push(observer);
	}

	next(value) {
		this.observers.forEach(observer => observer.next(value));
	}

	error(error) {
		this.observers.forEach(observer => observer.error(error));
	}

	complete() {
		this.observers.forEach(observer => observer.complete());
	}
}

export class CustomReplaySubject extends CustomSubject {
	private replyObservers: CustomObserver[] = [];
	private buffer: any[] = [];

	constructor(private bufferSize) {
		super();
	}

	subscribe(observer) {
		this.buffer.forEach(val => observer.next(val));
		this.replyObservers.push(observer);
	}

	next(value) {
		if (this.buffer.length === this.bufferSize) {
			this.buffer.shift();
		}

		this.buffer.push(value);
		this.replyObservers.forEach(observer => observer.next(value));
	}
}


export class CustomBehaviorSubject extends CustomSubject {
	private behaviorObservers: CustomObserver[] = [];
	private lastValue;

	constructor(initialValue) {
		super();

		if (typeof initialValue === 'undefined') {
			throw new Error('You need to provide initial value');
		}

		this.lastValue = initialValue
	}

	subscribe(observer) {
		this.behaviorObservers.push(observer);
		observer.next(this.lastValue);
	}

	next(value) {
		this.lastValue = value;
		this.behaviorObservers.forEach(observer => observer.next(value));
	}

	getValue() {
		return this.lastValue;
	}

	setValue(value) {
		this.next(value)
	}
}

export interface CustomObserver {
	closed?: boolean;
	next: (value: any) => void;
	error: (err: any) => void;
	complete: () => void;
}

export function http(url): CustomObservable {
	const subscriptionFn = (observer: CustomObserver | CustomSubject) => {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				observer.next(JSON.parse(xhr.responseText));
				observer.complete();
			}
		});
		xhr.open('GET', url);
		xhr.send();

		return () => xhr.abort()
	}

	return new CustomObservable(subscriptionFn);
}

new Subject()