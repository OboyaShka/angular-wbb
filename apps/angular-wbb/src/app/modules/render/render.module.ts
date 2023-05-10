import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenderRoutingModule } from './render-routing.module';
import { RenderComponent } from './render/render.component';
import { OnPushComponentComponent } from './render/on-push-component/on-push-component.component';
import { OnDefaultComponentComponent } from './render/on-default-component/on-default-component.component';
import { OnPushChildComponent } from './render/on-push-component/on-push-child/on-push-child.component';


@NgModule({
  declarations: [
    RenderComponent,
    OnPushComponentComponent,
    OnDefaultComponentComponent,
    OnPushChildComponent
  ],
  imports: [
    CommonModule,
    RenderRoutingModule
  ]
})
export class RenderModule { }
