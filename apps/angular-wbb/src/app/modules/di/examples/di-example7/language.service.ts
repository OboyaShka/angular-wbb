import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

export const LNG_TOKEN = new InjectionToken<string[]>('token for change languages')

@Injectable()
export class LanguageService {
	private readonly _language: BehaviorSubject<string>
	public readonly language: Observable<string>

	private readonly _languages: BehaviorSubject<string[]>
	public readonly languages: Observable<string[]>

	constructor(@Inject(LNG_TOKEN) @Optional() languages: string[]) {
		this._language = new BehaviorSubject<string>('')
		this.language = this._language

		this._languages = new BehaviorSubject<string[]>(languages)
		this.languages = this._languages
	}

	changeLng(lng: string): void {
		console.log(lng)
		if (!this._languages.value.includes(lng)) {
			throw Error('no lng in providers')
		}

		this._language.next(lng)
	}
}
