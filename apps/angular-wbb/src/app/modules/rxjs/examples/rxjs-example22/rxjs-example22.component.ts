import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-example22',
  templateUrl: './rxjs-example22.component.html',
  styleUrls: ['./rxjs-example22.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsExample22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
