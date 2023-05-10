import {
	AfterContentChecked,
	AfterContentInit, AfterViewChecked, AfterViewInit,
	ChangeDetectionStrategy,
	Component, ContentChild, ContentChildren,
	DoCheck, ElementRef, EventEmitter, Input,
	OnChanges, OnDestroy,
	OnInit, Output, QueryList, SimpleChanges, TemplateRef, ViewChild
} from '@angular/core';

@Component({
	selector: 'app-on-push-child',
	templateUrl: './on-push-child.component.html',
	styleUrls: ['./on-push-child.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent  implements
		OnChanges,
		OnInit,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	@Output() output = new EventEmitter<void>()

	@Input()
	template?: TemplateRef<{ $implicit: number }>

	@ContentChild("child")
	parentChild!: ElementRef

	@ContentChildren("text", { read: ElementRef })
	parentChildren: QueryList<ElementRef>

	@ContentChildren("hi,ha,he", { read: TemplateRef })
	templates: QueryList<TemplateRef<{ $implicit: string }>>

	@ViewChild("viewDiv") // При { static: true } доступ можно получить уже в ngOnChanges, но размеры могут быть не те
	viewDiv: ElementRef<HTMLDivElement>

	// Конструктор вызывается первым у всех компонентов, только после этого запускаются остальные
	// На этом моменте ещё не доступны инпуты
	constructor() {
		console.log('constructor child')
	}

	// Вызывается при изменении пропсов, хранит предыдущее состояние и флаг первого изменения (при первом ините предыдущее состояние undefined)
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges child', changes)
	}
	// Срабатывает после первого ngOnChanges, когда компонент готов к работе
	ngOnInit(): void {
		console.log('ngOnInit child')
	}
	// Вызывается при обходе cdr дерева, говорит о том, что в компоненте могли произойти изменения (изменился родитель)
	ngDoCheck(): void {
		console.log('ngDoCheck child')
	}
	// При инициализации контента родителя
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit child')
		console.log(this.parentChild)
		console.log(this.parentChildren)
	}
	// При изменении контента родителя
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked child')
		console.log(this.parentChild)
		console.log(this.parentChildren)
	}
	// При инициализации всех компонентов вёрстки компонента
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit child')
	}
	// При изменении компонентов вёрстки компонента
	ngAfterViewChecked(): void {
		// Нельзя менять состояние детей, без cdr
		console.log('ngAfterViewChecked child')
	}
	// При уничтожении
	ngOnDestroy(): void {
		console.log('ngOnDestroy child')
	}
	// Вызывается при каждом ререндере
	redraw() {
		console.log('redraw child')
	}
}
