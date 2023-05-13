import {
	AfterViewChecked,
	AfterViewInit,
	ChangeDetectionStrategy, ChangeDetectorRef,
	Component,
	ElementRef, Inject, Injector,
	OnInit, QueryList, Renderer2,
	TemplateRef,
	ViewChild, ViewChildren,
	ViewContainerRef, ɵViewRef
} from '@angular/core';
import { ViewKnowledgeChildComponent } from "./view-knowledge-child/view-knowledge-child.component";

@Component({
	selector: 'app-view-knowledge',
	templateUrl: './view-knowledge.component.html',
	styleUrls: ['./view-knowledge.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewKnowledgeComponent implements OnInit, AfterViewInit, AfterViewChecked {
	public test = 'test'

	@ViewChild('child') child: ViewKnowledgeChildComponent
	// хранит в себе "оригинальный" HTML-элемент в свойстве nativeElement
	@ViewChild('p') p: ElementRef<HTMLParagraphElement>
	@ViewChildren('p') pList: QueryList<HTMLParagraphElement>

	// содержит единственное свойство elementRef, содержащее экземпляр класса ElementRef, который в свою очередь ссылается на host-элемент.
	@ViewChild('template') template: TemplateRef<HTMLParagraphElement>

	// Класс ViewRef отражает представления. В Angular представление является структурной составляющей интерфейса приложения.
	//
	// В Angular различают два вида представлений:
	// Embedded Views - относятся к элементу <ng-template />;
	// Host Views - относятся к компоненту и инициализируются в момент динамического создания компонентов.

	@ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef


	constructor(
			private viewContainerRef: ViewContainerRef,
			private injector: Injector,
			public cdr: ChangeDetectorRef,
			private renderer2: Renderer2,
			@Inject(ChangeDetectorRef) private view: ɵViewRef<ViewKnowledgeComponent>,
	) {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		console.log('component: ', this.child)
		console.log('elementRef', this.p)
		this.pList.map(p => console.log('tut', p))
		console.log('templateRef', this.template)
		console.log('container', this.container)
		console.log('viewContainerRef', this.viewContainerRef)
	}

	ngAfterViewChecked() {

	}

	addToTemplateContainer() {
		this.container.createEmbeddedView(this.template);
		this.container.createComponent(ViewKnowledgeChildComponent, { injector: this.injector });
	}

	add() {
		this.viewContainerRef.createEmbeddedView(this.template);
		this.viewContainerRef.createComponent(ViewKnowledgeChildComponent, { injector: this.injector })
	}

	length() {
		console.log(this.viewContainerRef.length)

		this.renderer2.appendChild(this.p.nativeElement , this.renderer2.createText('d'))
		console.log(this.renderer2)
		console.log(this.viewContainerRef)
		console.log(this.view.rootNodes)
		console.log(this.cdr)
	}

	remove() {
		this.viewContainerRef.remove()
	}

	create() {


		let childComponentRef = this.viewContainerRef.createComponent(ViewKnowledgeChildComponent);
		childComponentRef.instance.test = '123'

	}
}
