import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicsComponent,
    DinamicsComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  exports: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent
  ]
})
export class TemplateModule { }
