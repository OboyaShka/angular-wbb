import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'video-player',
	templateUrl: './video-player.component.html',
	styleUrls: ['./video-player.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent {
	currentTime = 0
	volume = 1
	paused = true
	get icon(): string {
		return this.paused ? "\u23F5" : "\u23F8"
	}

	toggleState() {
		this.paused = !this.paused
	}

}
