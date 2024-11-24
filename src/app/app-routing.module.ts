import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryAddComponent } from './components/story/story-add/story-add.component';
import { MenuComponent } from './components/menu/menu.component';
import { StoryListComponent } from './components/story/story-list/story-list.component';
import { SprintAddComponent } from './components/sprint/sprint-add/sprint-add.component';
import { SprintListComponent } from './components/sprint/sprint-list/sprint-list.component';
import { SprintDetailsComponent } from './components/sprint/sprint-details/sprint-details.component';

const routes: Routes = [
  {
path:'',
redirectTo:'Menu',
pathMatch: 'full'   

  },
  {
  path:'Menu',
  component:MenuComponent
  },
  {
    path:'Story',
    loadChildren:()=>import('./components/story/story.module').then(m=>m.StorytModule)
  },
  {
    path:'Sprint',
    loadChildren:()=>import('./components/sprint/sprint.module').then(m=>m.SprintModule)
   },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
