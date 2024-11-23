import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sprint-add',
  templateUrl: './sprint-add.component.html',
  styleUrls: ['./sprint-add.component.css']
})
export class SprintAddComponent implements OnInit {
  sprintForm!:FormGroup;
  constructor(private service:LocalStorageService){

  }
  ngOnInit(): void {
    this.createSprintForm();
      
  }
  createSprintForm(){
    this.sprintForm=new FormGroup({
      sprintName:new FormControl('',[Validators.required]),
      sprintPoint:new FormControl('',[Validators.required])
    })
  }
  addSprint(){
    debugger;
    let newId:number=1;
    let sprintData=this.service.getSprint();
    let sprintName = this.sprintForm.get('sprintName')?.value;  
    if(sprintData && sprintData.length>0){
      const existingSprint = sprintData.find((sprint: any) => sprint.sprintName === sprintName);
      if (existingSprint) {
        alert('duplicate sprint name') 
        return;    
     }
    }
    newId = sprintData.length > 0 ? Math.max(...sprintData.map((story:any) => story.id)) + 1 : 1;
    let data={...this.sprintForm.getRawValue(),
      id:newId,
  }
    this.service.setSprint(data);
   this.assignSprintStories(newId);
    }
  
    assignSprintStories(sprintId:number){
      debugger;
      let stories=this.service.getStory();
      let sum=0;
      let sprintPoint=this.sprintForm.get('sprintPoint')?.value;
      const sortedStories = stories.sort((a: { storyPoint: number; }, b: { storyPoint: number; }) => b.storyPoint - a.storyPoint);
      sortedStories.map((storyItem:any)=>{
  if(storyItem.storyPoint+sum<=sprintPoint && storyItem.sprintId==0){
    storyItem.sprintId=sprintId;
    sum=storyItem.storyPoint+sum;
  }
     })
     this.service.setStories(sortedStories);
    }
  
  clearStories(){
    this.service.clearStories();
  }
  clearSprint(){
    this.service.clearSprint(this.sprintForm.get('sprintName')?.value)
  }

}
