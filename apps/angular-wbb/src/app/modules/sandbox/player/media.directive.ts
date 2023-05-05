import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
	selector: 'video[media], audio[media]'
})
export class MediaDirective {


	@Input()
	set currentTime(currentTime: number) {
		if (currentTime !== this.currentTime) {
			this.elementRef.nativeElement.currentTime = currentTime
		}
	}

	get currentTime(): number {
		return this.elementRef.nativeElement.currentTime
	}

	@HostBinding('volume')
	private _volume = 1

	@Input()
	get volume () {
		return this._volume * 100
	}

	set volume(volume: number) {
		this._volume = volume / 100
	}

	@Output()
	readonly volumeChange = new EventEmitter<number>()

	@HostListener('volumechange')
	onVolumeChange() {
		this._volume = this.elementRef.nativeElement.volume
		this.volumeChange.emit(this.volume)
	}

	@Output()
	readonly currentTimeChange = new EventEmitter<number>()

	@HostListener('timeupdate')
	@HostListener('seeking')
	@HostListener('seeked')
	onCurrentTimeChange() {
		this.currentTimeChange.emit(this.currentTime)
	}

	@Output()
	readonly pausedChange = new EventEmitter<boolean>()

	@HostListener('ended', ['true'])
	@HostListener('pause', ['true'])
	@HostListener('play', ['false'])
	onPauseChange(paused: boolean) {
		this.pausedChange.emit(paused)
	}

	@Input()
	set paused(paused: boolean) {
		if (paused) {
			this.elementRef.nativeElement.pause()
		} else {
			this.elementRef.nativeElement.play()
		}
	}
	get paused(): boolean {
		return this.elementRef.nativeElement.paused
	}

	@HostListener('window:keydown', ['$event'])
	onKeyDown(e) {
		if (e.keyCode == 32) {
			const paused = this.paused
			this.paused = !paused
			this.pausedChange.emit(!paused)
		}
	}


	constructor(private readonly elementRef: ElementRef<HTMLMediaElement>) {
	}
}
