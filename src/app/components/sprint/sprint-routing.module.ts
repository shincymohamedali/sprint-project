import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintAddComponent } from './sprint-add/sprint-add.component';
import { SprintListComponent } from './sprint-list/sprint-list.component';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';


const routes: Routes = [
  
  {
    path:'Sprint-add',
    component:SprintAddComponent
  },
  {
    path:'Sprint-list',
    component:SprintListComponent
  },
  {
    path:'Sprint-details',
    component:SprintDetailsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})
export class SprintRoutingModule { }
