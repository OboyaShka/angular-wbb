import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rxjs-example1',
  templateUrl: './rxjs-example1.component.html',
  styleUrls: ['./rxjs-example1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
