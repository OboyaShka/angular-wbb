import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiExample6CounterComponent } from './di-example6-counter/di-example6-counter.component';
import { IncDirective } from './inc.directive';

@NgModule({
	declarations: [
		DiExample6CounterComponent,
  IncDirective
	],
	exports: [
		DiExample6CounterComponent
	],
	imports: [
		CommonModule
	],
	providers: [

	]
})
export class DiExample6Module { }
