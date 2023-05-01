import { CustomObservable, CustomObserver } from "./rxjs-example21.custom-rx";

export function customOf(...values) {
    return new CustomObservable(observer => {
        values.forEach(value => observer.next(value));
    });
}

export function customMap(fn): (source: CustomObservable) => CustomObservable {
    return (source: CustomObservable) => {
        return new CustomObservable(observer => {
            return source.subscribe({
                error: (_: any) => {},
                complete: () => {},
                next(value) {
                    observer.next(fn(value));
                }
            });
        });
    };
}

export function customTap(fn): (source: CustomObservable) => CustomObservable {
    return (source: CustomObservable) => {
        return new CustomObservable(observer => {
            return source.subscribe({
                error: (_: any) => {},
                complete: () => {},
                next(value) {
                    fn();
                    observer.next(value);
                }
            });
        });
    };
}

export function createDefaultObserver(tag: string): CustomObserver {
    return {
        error: (_: any) => {},
        complete: () => {},
        next(value) {
            console.log(`${tag}: ${value}`);
        }
    };
}
