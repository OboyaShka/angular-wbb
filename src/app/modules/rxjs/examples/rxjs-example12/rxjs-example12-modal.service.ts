import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RxjsExample12ModalService extends Subject<string | null> {}
