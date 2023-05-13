import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
