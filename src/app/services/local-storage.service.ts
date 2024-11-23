import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setStory(story:object){
    debugger;
    let stories=this.getStory();
    stories.push(story);
    localStorage.removeItem('Stories')
this.setStories(stories); 
 }
  setStories(stories:object){
    localStorage.removeItem('Stories')
    localStorage.setItem('Stories',JSON.stringify(stories))

  }
  getStory(){
    const stories = localStorage.getItem("Stories"); 
    return stories ? JSON.parse(stories) : []; 
  }
  setSprint(sprint:object){
    debugger;
    let sprints=this.getSprint();
    sprints.push(sprint);
    this.clearSprints();
    localStorage.setItem('Sprints',JSON.stringify(sprints))
  }
  getSprint(){
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
    let stories=this.getStory();
    let sprints=this.getSprint();
    let sprintId=sprints.find((item:any)=>{
      item.sprintName==sprintName
    })
    stories.map((storyItem:any)=>{
      storyItem.sprintId==sprintId &&storyItem.sprintId==0 
    })
  }
  getSprintStories(sprintId:number){
    debugger;
    let stories=this.getStory();
    let sprintStories=stories.filter((sprintItem:any)=>sprintItem.sprintId==sprintId);
    return sprintStories;
  }
}
