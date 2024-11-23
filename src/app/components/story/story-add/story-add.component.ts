import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.css']
})
export class StoryAddComponent implements OnInit {
  storyForm!:FormGroup;
  showMessage:boolean=false;
  constructor(private service:LocalStorageService){

  }
  ngOnInit(): void {
      this.createStoryForm();
  }

  createStoryForm(){
    this.storyForm=new FormGroup({
    storyName:new FormControl('',[Validators.required]),
    storyPoint:new FormControl('',[Validators.required]),
    storyDescription:new FormControl('',[Validators.required])
  })
  }
  addStory(){
    debugger;
    let newId:number=1;
    let storyData=this.service.getStory();
    let storyName = this.storyForm.get('storyName')?.value;  
    if(storyData && storyData.length>0){
      const existingStory = storyData.find((story: any) => story.storyName === storyName);
      if (existingStory) {
        alert('duplicate story name') 
        return;    
     }
      newId = storyData.length > 0 ? Math.max(...storyData.map((story:any) => story.id)) + 1 : 1;
    }
      let data={...this.storyForm.getRawValue(),
        id:newId,
        sprintId:0
    }
    this.service.setStory(data);
    this.showMessage=true;
    this.storyForm.reset();
    setTimeout(() => {
      this.showMessage=false;

    }, 3000);
  }
}
