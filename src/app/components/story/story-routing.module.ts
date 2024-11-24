import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryAddComponent } from './story-add/story-add.component';
import { StoryListComponent } from './story-list/story-list.component';


const routes: Routes = [
    {
        path:'Story-add',
        component:StoryAddComponent
      },
      {
        path:'Story-list',
        component:StoryListComponent
      },
 
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class StoryRoutingModule { }
