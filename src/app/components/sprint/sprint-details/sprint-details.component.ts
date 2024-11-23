import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sprint-details',
  templateUrl: './sprint-details.component.html',
  styleUrls: ['./sprint-details.component.css']
})
export class SprintDetailsComponent implements OnInit {
  constructor(private service:LocalStorageService){

  }
  ngOnInit(): void {
    this.getSprintStories();
  }
sprintStories: any;
getSprintStories(){
// this.sprintStories=this.service.getSprintStories(sprint.id);
}
}
