import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { AnimalService, ZOO } from "../../animal.service";
import { PetService } from "../pet.service";

@Component({
  selector: 'app-di-example3-grand-child',
  templateUrl: './di-example3-grand-child.component.html',
  styleUrls: ['./di-example3-grand-child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiExample3GrandChildComponent implements OnInit {

	constructor(
			public emojiService: AnimalService,
			@Inject(ZOO) public zoo: any[], public petService: PetService
	) { }

  ngOnInit(): void {
  }

}
