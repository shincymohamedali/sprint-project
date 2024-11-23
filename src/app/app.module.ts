import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { StoryAddComponent } from './components/story/story-add/story-add.component';
import { StoryListComponent } from './components/story/story-list/story-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SprintAddComponent } from './components/sprint/sprint-add/sprint-add.component';
import { SprintListComponent } from './components/sprint/sprint-list/sprint-list.component';
import { SprintDetailsComponent } from './components/sprint/sprint-details/sprint-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StoryAddComponent,
    StoryListComponent,
    SprintAddComponent,
    SprintListComponent,
    SprintDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
