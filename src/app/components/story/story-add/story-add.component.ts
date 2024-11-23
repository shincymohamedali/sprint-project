import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Story } from 'src/app/models/story.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-story-add',
  templateUrl: './story-add.component.html',
  styleUrls: ['./story-add.component.css']
})
export class StoryAddComponent implements OnInit {
  storyForm!:FormGroup;
  showMessage:boolean=false;
  constructor(private service:LocalStorageService,private toastr: ToastrService){

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
    let newId:number=1;
    let storyData: Story[] = this.service.getStory() || [];
        if(storyData && storyData.length>0){
      newId = storyData.length > 0 ? Math.max(...storyData.map((story:any) => story.id)) + 1 : 1;
    }
    const newStory: Story={...this.storyForm.getRawValue(),
        id:newId,
        sprintId:0 //initially assigning 0 to storyid as story is not assigned to any sprint
    }
    this.service.setStory(newStory);
    this.showMessage=true;
    this.storyForm.reset();
    this.toastr.success('Story added successfully!', 'Success');

  }
}
