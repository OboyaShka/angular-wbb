import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MediaDirective } from './media.directive';
import { FormsModule } from "@angular/forms";



@NgModule({
	declarations: [
		VideoPlayerComponent,
		MediaDirective
	],
	exports: [
		VideoPlayerComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class PlayerModule { }
