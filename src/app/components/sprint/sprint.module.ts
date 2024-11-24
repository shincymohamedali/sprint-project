import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintRoutingModule } from './sprint-routing.module';
import { SprintAddComponent } from './sprint-add/sprint-add.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SprintAddComponent,
    SprintListComponent,
    SprintDetailsComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule,
    ReactiveFormsModule
  ]
})
export class SprintModule { }