import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sprint } from 'src/app/models/sprint.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  sprints:Sprint[] = [];
  constructor(private service:LocalStorageService,private router:Router){}
  ngOnInit(): void {
    this.getSprints();
  }
getSprints(){
this.sprints=this.service.getSprint();
}
onSelectSprint(sprint:Sprint){
  this.router.navigate(["/Sprint-details"],{
    queryParams:{
      id:sprint.id,
      name:sprint.sprintName
    }
  })
}
}
