import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sprint } from 'src/app/models/sprint.model';
import { Story } from 'src/app/models/story.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit {
  sprintData!: Sprint;
  sprintStories: Story[] = [];

  constructor(private service:LocalStorageService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.getSprintData();
    this.getSprintStories();
  }
getSprintStories(){
this.sprintStories=this.service.getSprintStories(this.sprintData.id);
}
getSprintData(){
  this.route.queryParams.subscribe((params)=>{
    this.sprintData = {
      id: +params['id'], 
      sprintName: params['name'],
      sprintPoint: 0, 
    };})
}
}
