import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryAddComponent } from './story-add/story-add.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  declarations: [
    StoryAddComponent,
    StoryListComponent,    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoryRoutingModule
  ]
})
export class StorytModule { }