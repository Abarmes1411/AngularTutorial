import { Component, OnInit } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.model';
import { CommonModule } from '@angular/common';
import { take } from 'rxjs';
import { TaskresumeComponent } from '../taskresume/taskresume.component';
import { ResumeComponent } from "../resume/resume.component";
import { TaskEvent } from '../../../models/taskevent.model';
import { TaskformComponent } from '../taskform/taskform.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, TaskresumeComponent,TaskformComponent,FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{
  taskList:Task[] = [];
  
  ngOnInit(): void {
    let task1:Task = new Task (1,"Tarea 1", "Descripción Tarea 1",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/18/2024"),false);
    let task2:Task = new Task (2,"Tarea 2", "Descripción Tarea 2",TaskPriority.HIGH,TaskStatus.IN_PROGRESS,new Date("11/5/2024"),new Date("11/16/2024"),false);
    let task3:Task = new Task (3,"Tarea 3", "Descripción Tarea 3",TaskPriority.LOW,TaskStatus.IN_PROGRESS,new Date("11/21/2024"),new Date("11/30/2024"),false);
    let task4:Task = new Task (4,"Tarea 4", "Descripción Tarea 4",TaskPriority.HIGH,TaskStatus.COMPLETED,new Date("11/8/2024"),new Date("11/21/2024"),false);
    let task5:Task = new Task (5,"Tarea 5", "Descripción Tarea 5",TaskPriority.MEDIUM,TaskStatus.PENDING,new Date("11/10/2024"),new Date("11/30/2024"),false);
    this.taskList = [task1,task2,task3,task4,task5];
  }

modifyTask(taskevent:TaskEvent){
  switch(taskevent.action){
    case "subirPrioridad": this.subirPrioridad(taskevent.taskid); break;
    case "bajarPrioridad": this.bajarPrioridad(taskevent.taskid); break;
    case "estadoActividad": this.estadoActividad(taskevent.taskid); break;
    case "editarTarea": this.editarTarea(taskevent.taskid); break;
    case "eliminarTarea": this.eliminarTarea(taskevent.taskid); break;
  }
}

  getTask(taskId:number):Task[]{
    return this.taskList.filter((tarea:Task)=>{
      return tarea.id == taskId;
    });
  }

  subirPrioridad(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.raisePriority();
  }

  bajarPrioridad(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.lowerPriority();
  }
  estadoActividad(taskId:number){
    let tarea:Task = this.getTask(taskId)[0];
    tarea.changeStatus();
  }
  editarTarea(taskId:number){
   console.log(`Editar la tarea: ${taskId}`);
  }
  eliminarTarea(taskId:number){
    this.taskList = this.taskList.filter((tarea:Task)=>{
      return tarea.id != taskId;
    });
  }
}