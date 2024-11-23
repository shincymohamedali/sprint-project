import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit{
  stories:any;
  constructor(private service:LocalStorageService){

  }
  ngOnInit(): void {
      this.getStories();
  }

  getStories(){
    this.stories=this.service.getStory();
    debugger
    
  }
}
