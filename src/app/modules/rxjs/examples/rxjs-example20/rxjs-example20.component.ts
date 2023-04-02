import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rxjs-example20',
  templateUrl: './rxjs-example20.component.html',
  styleUrls: ['./rxjs-example20.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class RxjsExample20Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
