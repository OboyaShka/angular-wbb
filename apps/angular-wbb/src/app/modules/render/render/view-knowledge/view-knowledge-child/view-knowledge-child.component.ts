import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-knowledge-child',
  templateUrl: './view-knowledge-child.component.html',
  styleUrls: ['./view-knowledge-child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewKnowledgeChildComponent implements OnInit {

	test = 'test'

  constructor() { }

  ngOnInit(): void {
  }

}
