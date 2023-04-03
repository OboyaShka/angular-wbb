import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// https://medium.com/angular-in-depth/make-the-most-of-angular-di-private-providers-concept-93fcb8ec4ab3

@Component({
  selector: 'app-di-example1',
  templateUrl: './di-example1.component.html',
  styleUrls: ['./di-example1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiExample1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
