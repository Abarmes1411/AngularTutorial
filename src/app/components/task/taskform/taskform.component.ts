import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { customValidator, priorityValidator } from './taskform.validators';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  
  formTaskEdit:FormGroup;
  @Input() taskToEdit: Task = {} as Task; 
  @Output() taskCreated = new EventEmitter<Task>();
  

constructor(formBuilder:FormBuilder){
  this.formTaskEdit=formBuilder.group({
    'name': ['',[Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    'description': ['',[Validators.required, Validators.maxLength(250)]],
    'priority': ['',[Validators.required, priorityValidator()]],
    'expirationDate': ['',[Validators.required, customValidator()]]
  })
}

onSubmit():void{
if(this.formTaskEdit.valid ){
  console.log(this.formTaskEdit.value)
  let nuevaTask = new Task(
    Math.floor(Math.random() * 1000), 
    this.formTaskEdit.value.name,
    this.formTaskEdit.value.description,
    this.formTaskEdit.value.priority,
    new Date(this.formTaskEdit.value.expirationDate),
    false
  );
 
  console.log('Tarea creada:', nuevaTask);
  this.taskCreated.emit(nuevaTask);
}else{
  console.log(`El formulario tiene errores: ${this.formTaskEdit.get('name')?.errors}`)
}
}

ngOnChanges() {
  if (this.taskToEdit) {
    const formatedDate = this.formatDate(this.taskToEdit.expirationDate);
    this.formTaskEdit.setValue({
      name: this.taskToEdit.name,
      description: this.taskToEdit.description,
      priority: this.taskToEdit.priority,
      expirationDate: formatedDate
    });
  }
}

formatDate(date: Date): string {
  const anyo = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');
  const hora = String(date.getHours()).padStart(2, '0');
  const minuto = String(date.getMinutes()).padStart(2, '0');
  return `${anyo}-${mes}-${dia}T${hora}:${minuto}`;
}




}