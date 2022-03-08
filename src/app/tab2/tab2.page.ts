import { Component } from '@angular/core';
import { TaskserviceService } from '../services/taskservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public completedTask: string[];
  public tasks:string[];
  constructor(private taskService:TaskserviceService){
    this.completedTask=this.taskService.getCompletedTasks();
    this.tasks=this.taskService.getTasks();
  }

  public unCompleteTask(pos:number){
    this.taskService.unCompleteTask(pos);
    this.tasks=this.taskService.getTasks();
  }

  public removeCompleteTask(pos:number){
    this.completedTask.splice(pos,1);
  }

}
