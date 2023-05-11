import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnimalService } from "../animal.service";
import { PetService } from "./pet.service";

@Component({
  selector: 'app-di-example3',
  templateUrl: './di-example3.component.html',
  styleUrls: ['./di-example3.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiExample3Component implements OnInit {

  constructor(public emojiService: AnimalService, public petService: PetService) { }

  ngOnInit(): void {
  }

}
