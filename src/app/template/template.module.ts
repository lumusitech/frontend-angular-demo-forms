import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';


@NgModule({
  declarations: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  exports: [
    BasicsComponent,
    DinamicsComponent,
    SwitchesComponent
  ]
})
export class TemplateModule { }
