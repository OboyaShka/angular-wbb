import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiExample8Component } from './di-example8/di-example8.component';
import { DiExample8WrapperComponent } from './di-example8/di-example8-wrapper/di-example8-wrapper.component';
import { DiExample8ChildComponent } from './di-example8/di-example8-wrapper/di-example8-child/di-example8-child.component';
import { DiExample8ContentDirective } from './di-example8/directives/di-example8-content.directive';
import { DiExample8EmojiDirective } from './di-example8/directives/controllers/di-example8-emoji.directive';
import { DiExample8ColorDirective } from './di-example8/directives/controllers/di-example8-color.directive';



@NgModule({
  declarations: [
    DiExample8Component,
    DiExample8WrapperComponent,
    DiExample8ChildComponent,
    DiExample8ContentDirective,
    DiExample8EmojiDirective,
    DiExample8ColorDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DiExample8Module { }
