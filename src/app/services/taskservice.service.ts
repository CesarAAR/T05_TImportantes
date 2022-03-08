import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  private tasks: string[]=[];
  private completedTasks:string[]=[];
  private favorite: string[]=[];
  constructor() { 
    this.tasks.push("Tarea 1","Tarea 3");
    this.completedTasks.push("Tarea 2","Tarea 4");
    this.favorite.push("Tarea 5","Tarea 6");
  }

  public addTask(task:string){
    this.tasks.push(task);
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);
  }

  public getTasks(){
    return this.tasks;
  }

  public completeTask(pos:number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getCompletedTasks(){
    return this.completedTasks;
  }

  public removeCompleteTask(pos:number){
    this.completedTasks.splice(pos,1);
  }

  public unCompleteTask(pos:number){
    this.tasks.push(this.completedTasks[pos]);
    this.removeCompleteTask(pos);
  }

  public unFavoriteTask(pos:number){
    this.tasks.push(this.favorite[pos]);
     this.removeFavorite(pos);
  }

  public addFavorite(pos:number){
    this.favorite.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getFavorite(){
    return this.favorite;
  }

  public removeFavorite(pos:number){
    this.favorite.splice(pos,1);
  }

  public completeTaskFAV(pos:number){
    this.completedTasks.push(this.favorite[pos]);
    this.removeFavorite(pos);
  }

}
