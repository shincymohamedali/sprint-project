import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';
import { Sprint } from '../models/sprint.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setStory(story: Story): void{
    let stories=this.getStory();
    stories.push(story);
this.setStories(stories); 
 }
  setStories(stories: Story[]): void{
    localStorage.setItem('Stories',JSON.stringify(stories))

  }
  getStory():Story[]{
    const stories = localStorage.getItem("Stories"); 
    return stories ? JSON.parse(stories) : []; 
  }
  setSprint(sprint:Sprint){
    let sprints=this.getSprint();
    sprints.push(sprint);
    localStorage.setItem('Sprints',JSON.stringify(sprints))
  }
  getSprint(): Sprint[]{
    const sprints = localStorage.getItem("Sprints"); 
    return sprints ? JSON.parse(sprints) : []; 
  }
  clearStories(){
    localStorage.removeItem('Stories')

  }
  clearSprints(){
    localStorage.removeItem('Sprints')

  }
  clearSprint(sprintName:string){
  let stories = this.getStory();
  let sprints = this.getSprint();
  const sprint = sprints.find((item: any) => item.sprintName === sprintName);

  if (!sprint) {
    console.error('Sprint not found');
    return;
  }

  const sprintId = sprint.id;
  stories = stories.map((storyItem: any) =>
    storyItem.sprintId === sprintId ? { ...storyItem, sprintId: 0 } : storyItem
  );
  this.setStories(stories);
  }
  
  getSprintStories(sprintId:number){
    let stories=this.getStory();
    let sprintStories=stories.filter((sprintItem:any)=>sprintItem.sprintId==sprintId);
    return sprintStories;
  }
}
