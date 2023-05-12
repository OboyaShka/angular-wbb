import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LanguageService } from "../language.service";

@Component({
  selector: 'app-di-example7',
  templateUrl: './di-example7.component.html',
  styleUrls: ['./di-example7.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiExample7Component implements OnInit {

  constructor(public lngService: LanguageService) { }

  ngOnInit(): void {
  }

}
