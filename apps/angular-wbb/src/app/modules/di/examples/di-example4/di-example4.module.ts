import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiExample4Component } from './di-example4/di-example4.component';
import { DiExample4ChildComponent } from './di-example4/di-example4-child/di-example4-child.component';
import { BearDirective } from './di-example4/bear.directive';
import { DiExample4GrandChildComponent } from './di-example4/di-example4-grand-child/di-example4-grand-child.component';

// @Optional если нет зависимости, то null
// @Self провайд только в рамках нашего компонента (Директива, провайд и т.д)
// @SkipSelf пропуск инъектора компонента
// @Host провайд только вокруг view компонента
//  @Host + @SkipSelf найди только в родительском view провайдере

// Директива первее компонента, но viewProviders главнее директивы. (Но не для ng-content)
// При этом providers инжектит в ng-content, а viewProviders нет

@NgModule({
  declarations: [
    DiExample4Component,
    DiExample4ChildComponent,
    BearDirective,
    DiExample4GrandChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiExample4Module { }
