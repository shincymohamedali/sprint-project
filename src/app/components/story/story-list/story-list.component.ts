import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit{
  stories:Story[]=[];
  constructor(private service:LocalStorageService){

  }
  ngOnInit(): void {
      this.getStories();
  }

  getStories(){
    this.stories=this.service.getStory();
    
  }
}
