import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public favoriteTasks: string[];
  public tasks:string[];
  constructor(private taskService:TaskserviceService){
    this.favoriteTasks=this.taskService.getFavorite();
    this.tasks=this.taskService.getTasks();
  }

  public completeTask(pos:number){
    this.taskService.completeTaskFAV(pos);
    this.tasks=this.taskService.getTasks();
  }

  public unFavoriteTask(pos:number){
    this.taskService.unFavoriteTask(pos);
    this.tasks=this.taskService.getTasks();
  }
  //Si la tarea es completada y esta en favoritos --> se mantiene en favoritos.
  //Si la tarea es completada y le quito el favorito --> dicha tarea se va a completadas
  //Si la tarea no se ha completado y le quito el favorito --> se regresa a principal
  public removeFavorito(pos:number){
    this.favoriteTasks.splice(pos,1);
  }
}
