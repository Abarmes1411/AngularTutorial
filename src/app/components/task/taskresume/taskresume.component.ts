import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../../../models/task.models';
import { CommonModule } from '@angular/common';
import { TaskEvent } from '../../../models/taskevent.models';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-taskresume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskresume.component.html',
  styleUrl: './taskresume.component.css'
})
export class TaskresumeComponent {

  @Input()
  taskInput:Task = new Task(1,"Tarea 1", "Descripción Tarea 1",TaskPriority.LOW,TaskStatus.PENDING,new Date("11/1/2024"),new Date("11/18/2024"),false)

  @Output()
  eventTaskModify = new EventEmitter<TaskEvent>();


  constructor(taskService: TaskService){
    
  }

  subirPrioridad(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("subirPrioridad", taskId))
  }

  bajarPrioridad(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("bajarPrioridad", taskId))

  }
  estadoActividad(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("estadoActividad", taskId))

  }
  editarTarea(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("editarTarea", taskId))

  }
  eliminarTarea(taskId:number){
    this.eventTaskModify.emit(new TaskEvent("eliminarTarea", taskId))

  }
}
