import { defer, Observable, timer } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class RxjsExample17DataService {
    load(): Observable<string> {
        return defer(() => {
            const delay = Math.random() * 5;

            return timer(delay * 1000).pipe(mapTo(`Loading took ${delay} seconds`), tap(console.log));
        });
    }
}
